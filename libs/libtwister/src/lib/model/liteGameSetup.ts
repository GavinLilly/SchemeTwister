import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import { LibTwister } from '../libTwister';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { Henchmen, Hero, Mastermind, VillainGroup } from './cards';
import { AbstractCardGroup } from './cards/abstractCardGroup';
import { IAdditionalDeck, IAdditionalDeckRules } from './interfaces';
import { CARD_TYPE, CardType, NumPlayers } from './types';

interface LiteGameSetupConfig {
  numPlayers: number;
  schemeId: string;
  mastermindId: string;
  heroDeck: string[];
  villainDeck: string[];
  additionalDeck?: string[];
}
export class LiteGameSetup {
  numPlayers = 2;
  schemeId = '';
  mastermindId = '';
  heroDeck: string[] = [];
  villainDeck: string[] = [];
  additionalDeck: string[] = [];

  constructor();
  constructor(config: LiteGameSetupConfig);
  constructor(config?: LiteGameSetupConfig) {
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

  private static _getById<T extends AbstractCardGroup>(
    ids: string[],
    cardType: CardType,
    twister: LibTwister
  ): T[] {
    return ids
      .map((id) => twister.stores.getCardById(id, cardType))
      .filter((card): card is T => !!card);
  }

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
      this.mastermindId,
      CARD_TYPE.mastermind
    ) as Mastermind;

    const scheme = twister.schemeFactory.getOne(this.schemeId);

    const instantiatedScheme = instantiateScheme(scheme);

    const rules = instantiatedScheme.rules[this.numPlayers as NumPlayers];

    const filledAdditionalDeck =
      rules.additionalDeck !== undefined
        ? this._buildFullAdditionalDeck(rules.additionalDeck, twister)
        : undefined;

    return new GameSetup({
      heroDeck: {
        heroes: LiteGameSetup._getById(this.heroDeck, CARD_TYPE.hero, twister),
        henchmen: LiteGameSetup._getById(
          this.heroDeck,
          CARD_TYPE.henchmen,
          twister
        ),
      },
      mastermind,
      numPlayers: this.numPlayers,
      scheme: instantiatedScheme,
      villainDeck: {
        henchmen: LiteGameSetup._getById(
          this.villainDeck,
          CARD_TYPE.henchmen,
          twister
        ),
        villains: LiteGameSetup._getById(
          this.villainDeck,
          CARD_TYPE.villainGroup,
          twister
        ),
        heroes: LiteGameSetup._getById(
          this.villainDeck,
          CARD_TYPE.hero,
          twister
        ),
        masterminds: LiteGameSetup._getById(
          this.villainDeck,
          CARD_TYPE.mastermind,
          twister
        ),
        numMasterStrikes: 5,
        numTwists: rules.villainDeck.numTwists,
      },
      additionalDeck: filledAdditionalDeck,
    });
  }

  private _buildFullAdditionalDeck(
    rules: IAdditionalDeckRules,
    twister: LibTwister
  ): IAdditionalDeck | undefined {
    const getAdditionalDeck = (cardType: CardType) =>
      LiteGameSetup._getById(this.additionalDeck, cardType, twister);

    return {
      name: rules.name,
      deck: {
        henchmen: getAdditionalDeck(CARD_TYPE.henchmen) as Henchmen[],
        heroes: getAdditionalDeck(CARD_TYPE.hero) as Hero[],
        masterminds: getAdditionalDeck(CARD_TYPE.mastermind) as Mastermind[],
        villains: getAdditionalDeck(CARD_TYPE.villainGroup) as VillainGroup[],
      },
    };
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
}
