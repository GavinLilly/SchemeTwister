import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import { LibTwister } from '../libTwister';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { Henchmen, Hero, Mastermind, VillainGroup } from './cards';
import { AbstractCardGroup } from './cards/abstractCardGroup';
import { IAdditionalDeck, IAdditionalDeckRules, IHeroDeck } from './interfaces';
import { NumPlayers } from './types';

interface LiteGameSetupConfig {
  numPlayers: number;
  schemeId: string;
  mastermindId: string;
  heroDeck: string[];
  villainDeck: string[];
  additionalDeck?: string[];
}

/**
 * A class for storing a "lite" instance of a game setup. This means only
 * storing the card IDs in arrays.
 */
export class LiteGameSetup {
  numPlayers = 2;
  schemeId = '';
  mastermindId = '';
  heroDeck: string[] = [];
  villainDeck: string[] = [];
  additionalDeck: string[] = [];

  /**
   * Creates an "empty" LiteGameSetup instance. This shouldn't normally be used
   * and is only available for use with class-transformer
   */
  constructor();
  constructor(config: LiteGameSetupConfig);
  constructor(config?: LiteGameSetupConfig) {
    // Config can be undefined to allow class-transformer to instantiate
    if (config !== undefined) {
      ({
        numPlayers: this.numPlayers,
        schemeId: this.schemeId,
        mastermindId: this.mastermindId,
        heroDeck: this.heroDeck,
        villainDeck: this.villainDeck,
      } = config);

      this.additionalDeck = config.additionalDeck ?? [];
    }
  }

  /**
   * Gets the cards for all provided card IDs
   * @param ids The array of card IDs to get from the LibTwister instance
   * @param twister The LibTwister instance to search within
   * @returns An array of card groups
   */
  private static _getById = <T extends AbstractCardGroup>(
    ids: string[],
    twister: LibTwister
  ): Set<T> =>
    new Set(
      ids
        .map((id) => twister.stores.getCardById(id))
        .filter((card): card is T => !!card)
    );

  private static _builAdditionalOrVillainDeck(
    deck: string[],
    twister: LibTwister
  ) {
    const henchmen = new Set<Henchmen>();
    const heroes = new Set<Hero>();
    const masterminds = new Set<Mastermind>();
    const villains = new Set<VillainGroup>();

    LiteGameSetup._getById(deck, twister).forEach((card) => {
      switch (card.cardType) {
        case 'Henchmen':
          henchmen.add(card as Henchmen);
          break;
        case 'Hero':
          heroes.add(card as Hero);
          break;
        case 'Mastermind':
          masterminds.add(card as Mastermind);
          break;
        case 'Villain Group':
          villains.add(card as VillainGroup);
          break;
        default:
          throw new Error('Unsupported card type in deck');
      }
    });

    return {
      henchmen,
      heroes,
      masterminds,
      villains,
    };
  }

  /**
   * Creates a LiteGameSetup instance from the provided "full" Game Setup
   * @param setup The GameSetup to create a LiteGameSetup from
   * @returns A LiteGameSetup instance
   */
  public static of(setup: GameSetup): LiteGameSetup {
    return new LiteGameSetup({
      numPlayers: setup.numPlayers,
      schemeId: setup.scheme.id,
      mastermindId: setup.mastermind.id,
      heroDeck: Array.from(setup.heroDeckAsArray()).map((card) => card.id),
      villainDeck: Array.from(setup.villainDeckAsArray()).map(
        (card) => card.id
      ),
      additionalDeck: Array.from(setup.additionalDecksAsArray()).map(
        (card) => card.id
      ),
    });
  }

  public toGameSetup(libTwister: LibTwister): GameSetup {
    const mastermind = libTwister.stores.getCardById(
      this.mastermindId
    ) as Mastermind;

    const scheme = libTwister.schemeFactory.get(this.schemeId);

    const instantiatedScheme = instantiateScheme(scheme);

    const rules = instantiatedScheme.rules[this.numPlayers as NumPlayers];

    return new GameSetup({
      heroDeck: this._buildHeroDeck(libTwister),
      villainDeck: {
        ...LiteGameSetup._builAdditionalOrVillainDeck(
          this.villainDeck,
          libTwister
        ),
        numMasterStrikes: 5,
        numTwists: rules.villainDeck.numTwists,
      },
      additionalDecks: this._buildFullAdditionalDeck(
        rules.additionalDeck,
        libTwister
      ),
      mastermind,
      numPlayers: this.numPlayers,
      scheme: instantiatedScheme,
    });
  }

  /**
   * The unique ID of the setup
   * @returns A 10 digit string containing the unique ID of this setup
   */
  public calculateUid(): string {
    const allowedCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const seed = seedrandom(this.toString());
    const nanoid = customRandom(allowedCharacters, 10, (size) =>
      new Uint8Array(size).map(() => 256 * seed())
    );

    return nanoid();
  }

  /**
   * Gets all the cards used in the game and returns their IDs as a JSON string
   * @returns a json string of the game setup IDs
   */
  public toString(): string {
    return JSON.stringify({
      numPlayers: this.numPlayers,
      scheme: this.schemeId,
      mastermind: this.mastermindId,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDeck: this.additionalDeck,
    });
  }

  private _buildHeroDeck(twister: LibTwister): IHeroDeck {
    const henchmen = new Set<Henchmen>();
    const heroes = new Set<Hero>();

    LiteGameSetup._getById(this.heroDeck, twister).forEach((card) => {
      switch (card.cardType) {
        case 'Henchmen':
          henchmen.add(card as Henchmen);
          break;
        case 'Hero':
          heroes.add(card as Hero);
          break;
        default:
          throw new Error('Unsupported card type in the hero deck');
      }
    });

    return {
      heroes,
      henchmen,
    };
  }

  private _buildFullAdditionalDeck(
    rules: IAdditionalDeckRules[],
    twister: LibTwister
  ): IAdditionalDeck[] {
    try {
      return rules.map((rule) => ({
        name: rule.name,
        deck: LiteGameSetup._builAdditionalOrVillainDeck(
          this.additionalDeck,
          twister
        ),
      }));
    } catch (err) {
      throw new Error('Unsupported card type in the additional deck');
    }
  }
}
