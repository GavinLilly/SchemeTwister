import { AbstractMastermind } from './AbstractMastermind';
import { CardType } from './cardType.enum';
import { GameSetSize } from './gameSetSize.enum';
import {
  IBystander,
  ICard,
  IGameSetMeta,
  IHenchmen,
  IHero,
  IVillainGroup,
} from './interfaces';
import { SchemeMinusRules } from './interfaces/newScheme.interface';
import { Series } from './series.enum';

export class GameSet implements IGameSetMeta {
  readonly id: string;
  readonly name: string;
  readonly size: GameSetSize;
  readonly releaseYear: number;
  readonly series: Series;

  constructor(
    gameSetProps: IGameSetMeta,
    readonly heroes: IHero[],
    readonly masterminds?: AbstractMastermind[],
    readonly schemes?: SchemeMinusRules[],
    readonly villains?: IVillainGroup[],
    readonly henchmen?: IHenchmen[],
    readonly bystanders?: IHero[] | IBystander[]
  ) {
    ({
      id: this.id,
      name: this.name,
      size: this.size,
      releaseYear: this.releaseYear,
      series: this.series,
    } = gameSetProps);
  }

  /**
   * A sorter for GameSet objects
   * @param a the first GameSet
   * @param b the second GameSet
   * @returns -1 if param a comes first. 1 if param b. 0 if they're equal
   */
  public static sorter(a: GameSet, b: GameSet): number {
    if (a.size > b.size) {
      return -1;
    } else if (a.size < b.size) {
      return 1;
    } else {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    }
  }

  public get(cardType: CardType): ICard[] | SchemeMinusRules[] | undefined {
    switch (cardType) {
      case CardType.BYSTANDER:
        return this.bystanders;
      case CardType.SCHEME:
        return this.schemes;
      case CardType.HENCHMEN:
        return this.henchmen;
      case CardType.HERO:
        return this.heroes;
      case CardType.MASTERMIND:
        return this.masterminds;
      case CardType.VILLAINGROUP:
        return this.villains;
      default:
        return undefined;
    }
  }
}
