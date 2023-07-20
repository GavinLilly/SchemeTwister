import { customRandom } from 'nanoid';
import seedrandom from 'seedrandom';

import { LibTwister } from '../libTwister';
import instantiateScheme from '../utils/instantiateScheme';

import { GameSetup } from './GameSetup';
import { CardType } from './cardType.enum';
import { Henchmen, Hero, Mastermind, VillainGroup } from './cards';
import { IAdditionalDeck } from './interfaces';
import { NumPlayers } from './types';

export class LiteGameSetup {
  numPlayers!: number;
  schemeId!: string;
  mastermindId!: string;
  heroDeck!: string[];
  villainDeck!: string[];
  additionalDeck?: string[];

  constructor(config: {
    numPlayers: number;
    schemeId: string;
    mastermindId: string;
    heroDeck: string[];
    villainDeck: string[];
    additionalDeck?: string[];
  }) {
    if (config !== undefined) {
      ({
        numPlayers: this.numPlayers,
        schemeId: this.schemeId,
        mastermindId: this.mastermindId,
        heroDeck: this.heroDeck,
        villainDeck: this.villainDeck,
        additionalDeck: this.additionalDeck,
      } = config);
    }
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
      CardType.MASTERMIND
    ) as Mastermind;
    const scheme = twister.schemeFactory.allCardsMap.get(this.schemeId);

    const getHenchmenById = (ids: string[]) =>
      ids
        .map((id) => twister.stores.getCardById(id, CardType.HENCHMEN))
        .filter((card): card is Henchmen => !!card);
    const getHeroById = (ids: string[]) =>
      ids
        .map((id) => twister.stores.getCardById(id, CardType.HERO))
        .filter((card): card is Hero => !!card);
    const getVillainsById = (ids: string[]) =>
      ids
        .map((id) => twister.stores.getCardById(id, CardType.VILLAINGROUP))
        .filter((card): card is VillainGroup => !!card);
    const getMastermindsById = (ids: string[]) =>
      ids
        .map((id) => twister.stores.getCardById(id, CardType.MASTERMIND))
        .filter((card): card is Mastermind => !!card);

    if (scheme) {
      const instantiatedScheme = instantiateScheme(scheme);

      const rules = instantiatedScheme.rules[this.numPlayers as NumPlayers];

      const filledAdditionalDeck: IAdditionalDeck | undefined =
        this.additionalDeck !== undefined && rules.additionalDeck
          ? {
              name: rules.additionalDeck?.name,
              deck: {
                henchmen: getHenchmenById(this.additionalDeck),
                heroes: getHeroById(this.additionalDeck),
                villains: getVillainsById(this.additionalDeck),
                masterminds: getMastermindsById(this.additionalDeck),
              },
            }
          : undefined;

      return new GameSetup({
        heroDeck: {
          heroes: getHeroById(this.heroDeck),
          henchmen: getHenchmenById(this.heroDeck),
        },
        mastermind,
        numPlayers: this.numPlayers,
        scheme: instantiatedScheme,
        villainDeck: {
          henchmen: getHenchmenById(this.villainDeck),
          villains: getVillainsById(this.villainDeck),
          heroes: getHeroById(this.villainDeck),
          masterminds: getMastermindsById(this.villainDeck),
          numMasterStrikes: 5,
          numTwists: rules.villainDeck.numTwists,
        },
        additionalDeck: filledAdditionalDeck,
      });
    }

    throw new Error();
  }

  /**
   * The unique ID of the setup
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
