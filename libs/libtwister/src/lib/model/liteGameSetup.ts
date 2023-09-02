import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import { LibTwister } from '../libTwister';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { Henchmen, Hero, Mastermind, VillainGroup } from './cards';
import { AbstractCardGroup } from './cards/abstractCardGroup';
import { IAdditionalDeck, IAdditionalDeckRules } from './interfaces';
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
  ): T[] =>
    ids
      .map((id) => twister.stores.getCardById(id))
      .filter((card): card is T => !!card);

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
      heroDeck: setup.heroDeckAsArray().map((card) => card.id),
      villainDeck: setup.villainDeckAsArray().map((card) => card.id),
      additionalDeck: setup.additionalDeckAsArray().map((card) => card.id),
    });
  }

  public toGameSetup(): GameSetup {
    const twister = LibTwister.of();

    const mastermind = twister.stores.getCardById(
      this.mastermindId
    ) as Mastermind;

    const scheme = twister.schemeFactory.get(this.schemeId);

    const instantiatedScheme = instantiateScheme(scheme);

    const rules = instantiatedScheme.rules[this.numPlayers as NumPlayers];

    const filledAdditionalDeck = this._buildFullAdditionalDeck(
      rules.additionalDeck,
      twister
    );

    return new GameSetup({
      heroDeck: {
        heroes: LiteGameSetup._getById(this.heroDeck, twister),
        henchmen: LiteGameSetup._getById(this.heroDeck, twister),
      },
      mastermind,
      numPlayers: this.numPlayers,
      scheme: instantiatedScheme,
      villainDeck: {
        henchmen: LiteGameSetup._getById(this.villainDeck, twister),
        villains: LiteGameSetup._getById(this.villainDeck, twister),
        heroes: LiteGameSetup._getById(this.villainDeck, twister),
        masterminds: LiteGameSetup._getById(this.villainDeck, twister),
        numMasterStrikes: 5,
        numTwists: rules.villainDeck.numTwists,
      },
      additionalDeck: filledAdditionalDeck,
    });
  }

  /**
   * The unique ID of the setup
   * @returns A 10 digit string containing the unique ID of this setup
   */
  public calculateUid(): string {
    const seed = seedrandom(this.toString());
    const nanoid = customRandom('abcdefghijklmnopqrstuvwxyz', 10, (size) =>
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

  private _buildFullAdditionalDeck(
    rules: IAdditionalDeckRules | undefined,
    twister: LibTwister
  ): IAdditionalDeck | undefined {
    if (rules === undefined) {
      return undefined;
    }

    const additionalDeckCards = LiteGameSetup._getById(
      this.additionalDeck,
      twister
    );

    return {
      name: rules.name,
      deck: {
        henchmen: additionalDeckCards.filter(
          (card) => card.cardType === 'Henchmen'
        ) as Henchmen[],
        heroes: additionalDeckCards.filter(
          (card) => card.cardType === 'Hero'
        ) as Hero[],
        masterminds: additionalDeckCards.filter(
          (card) => card.cardType === 'Mastermind'
        ) as Mastermind[],
        villains: additionalDeckCards.filter(
          (card) => card.cardType === 'Villain Group'
        ) as VillainGroup[],
      },
    };
  }
}
