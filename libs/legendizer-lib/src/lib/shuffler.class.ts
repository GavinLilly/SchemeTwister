import { GameSet, CardType } from './enums';
import {
  IScheme,
  IMastermind,
  IHenchmen,
  IVillainGroup,
  IGameSetup,
} from './interfaces';
import { IBase, IHero } from './interfaces';
import { AllSchemes } from './constants/schemes';
import { AllMasterminds } from './constants/masterminds';
import { AllHeroes } from './constants/heroes';
import { AllHenchmen } from './constants/henchmen';
import { AllVillains } from './constants/villains';

export class Shuffler {
  private gameSets: GameSet[];

  constructor(gameSets: GameSet[]) {
    this.gameSets = gameSets;
  }

  /**
   * getRandom will recursively pick a number of records based on the passed in count and return an array of the picked records
   * @param {T[]} records An array of records to select from
   * @param {number} [count] The number of records required
   * @param {T[]} [elements] An array of records to include in the returned records. This ensures that the same entry isn't chosen twice
   */
  private getRandom<T extends IBase>(records: T[]): T;
  private getRandom<T extends IBase>(
    records: T[],
    count: number,
    elements: T[]
  ): T[];
  private getRandom<T extends IBase>(
    records: T[],
    count: number = 1,
    elements: T[] = []
  ): T[] {
    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    if (elements.length > 0) {
      return getRandomElement(
        records.filter((record) => !elements.includes(record))
      );
    } else {
      if ((count = 1)) return getRandomElement([...records])[0];
      else return getRandomElement([...records]);
    }
  }

  private getDeckSubset<T extends IBase>(set: T[]): T[] {
    return set.filter((item) => {
      return this.gameSets.includes(item.gameSet);
    });
  }

  private shuffle<T extends IBase>(set: T[]): T;
  private shuffle<T extends IBase>(
    set: T[],
    count: number,
    include: T[],
    exclude: T[]
  ): T[];
  private shuffle<T extends IBase>(
    set: T[],
    count: number = 1,
    include: T[] = [],
    exclude: T[] = []
  ) {
    const schemeSet = this.getDeckSubset(set);
    if (count == 1) {
      return this.getRandom(schemeSet);
    } else {
      return this.getRandom(
        schemeSet.filter((item) => {
          return !exclude.includes(item);
        }),
        count,
        include
      );
    }
  }

  public shuffleScheme(): IScheme {
    return this.shuffle(AllSchemes);
  }

  public shuffleMastermind(): IMastermind {
    return this.shuffle(AllMasterminds);
  }

  public shuffleHeroes(
    count: number,
    include?: IHero[],
    exclude?: IHero[]
  ): IHero[] {
    return this.shuffle(AllHeroes, count, include, exclude);
  }

  public shuffleHenchmen(
    count: number,
    include?: IHenchmen[],
    exclude?: IHenchmen[]
  ): IHenchmen[] {
    return this.shuffle(AllHenchmen, count, include, exclude);
  }

  public shuffleVillains(
    count: number,
    include?: IVillainGroup[],
    exclude?: IVillainGroup[]
  ): IVillainGroup[] {
    return this.shuffle(AllVillains, count, include, exclude);
  }

  public generateGame(numPlayers: number): IGameSetup {
    let setup: IGameSetup;
    setup.numPlayers = numPlayers;
    setup.scheme = this.shuffleScheme();
    setup.mastermind = this.shuffleMastermind();
    setup.heroDeck = this.shuffleHeroes(
      setup.scheme.rules.heroDeck.numHeroes[numPlayers]
    );
    setup.villainDeck.henchmen = this.shuffleHenchmen(
      setup.scheme.rules.villainDeck.numHenchmenGroups[numPlayers]
    );
    setup.villainDeck.villains = this.shuffleVillains(
      setup.scheme.rules.villainDeck.numVillainGroups[numPlayers]
    );
    if (
      setup.scheme.requiredCards.inVillainDeck !== undefined &&
      setup.scheme.requiredCards.inVillainDeck.cardType == CardType.HERO
    ) {
      setup.villainDeck.hero = setup.scheme.requiredCards.inVillainDeck;
    }

    return setup;
  }
}
