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
    if (config === undefined) {
      return this;
    }
    ({
      numPlayers: this.numPlayers,
      schemeId: this.schemeId,
      mastermindId: this.mastermindId,
      heroDeck: this.heroDeck,
      villainDeck: this.villainDeck,
      additionalDeck: this.additionalDeck,
    } = config);
  }

  /**
   * The unique ID of the setup
   */
  public static calculateUid(setup: LiteGameSetup): string {
    const seed = seedrandom(setup.toString());
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

  public toFullGameSetup() {
    const twister = LibTwister.of();

    const mastermind = twister.stores.getCardById(
      this.mastermindId,
      CardType.MASTERMIND
    ) as Mastermind;
    const scheme = twister.schemeFactory.allCardsMap.get(this.schemeId);

    const getById = (id: string) => twister.stores.getCardById(id);

    const villainDeck = this.villainDeck.map(getById);
    const additionalDeck = this.additionalDeck?.map(getById);
    const heroDeck = this.heroDeck.map(getById);

    if (scheme) {
      const instantiatedScheme = instantiateScheme(scheme);

      const rules = instantiatedScheme.rules[this.numPlayers as NumPlayers];

      const filledAdditionalDeck: IAdditionalDeck | undefined =
        additionalDeck && rules.additionalDeck
          ? {
              name: rules.additionalDeck?.name,
              deck: {
                henchmen: additionalDeck.filter(Henchmen.isHenchmen),
                heroes: additionalDeck.filter(Hero.isHero),
                villains: additionalDeck.filter(VillainGroup.isVillainGroup),
                masterminds: additionalDeck.filter(Mastermind.isMastermind),
              },
            }
          : undefined;

      return new GameSetup({
        heroDeck: {
          heroes: heroDeck.filter(Hero.isHero),
          henchmen: heroDeck.filter(Henchmen.isHenchmen),
        },
        mastermind,
        numPlayers: this.numPlayers,
        scheme: instantiatedScheme,
        villainDeck: {
          henchmen: villainDeck.filter(Henchmen.isHenchmen),
          villains: villainDeck.filter(VillainGroup.isVillainGroup),
          heroes: villainDeck.filter(Hero.isHero),
          masterminds: villainDeck.filter(Mastermind.isMastermind),
          numMasterStrikes: 5,
          numTwists: rules.villainDeck.numTwists,
        },
        additionalDeck: filledAdditionalDeck,
      });
    }

    throw new Error();
  }
}
