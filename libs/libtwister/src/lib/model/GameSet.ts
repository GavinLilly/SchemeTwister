import * as uuid from 'uuid';

import { CardType } from './cardType.enum';
import { GameSetSize } from './gameSetSize.enum';
import { Hero } from './hero';
import { IBystander, IGameSetMeta, IHenchmen } from './interfaces';
import { SchemeMinusRules } from './interfaces/newScheme.interface';
import { Mastermind } from './mastermind';
import { Series } from './series.enum';
import { AllCardTypes } from './types';
import { VillainGroup } from './villainGroup';

export class GameSet implements IGameSetMeta {
  readonly id: string;
  readonly name: string;
  readonly size: GameSetSize;
  readonly releaseYear: number;
  readonly series: Series;

  constructor(
    gameSetProps: IGameSetMeta,
    readonly heroes: Hero[],
    readonly masterminds?: Mastermind[],
    readonly schemes?: SchemeMinusRules[],
    readonly villains?: VillainGroup[],
    readonly henchmen?: IHenchmen[],
    readonly bystanders?: Hero[] | IBystander[]
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

  /**
   * Creates an empty GameSet
   * @returns a GameSet
   */
  public static empty(): GameSet {
    return new GameSet(
      {
        id: uuid.v4(),
        name: 'EMPTY GAME SET',
        releaseYear: 1970,
        series: Series.MAINLINE,
        size: GameSetSize.PROMO,
      },
      []
    );
  }

  /**
   * Gets all the cards in the game set with the given type
   * @param cardType the type of card to get
   * @returns an array of cards
   */
  public get(cardType: CardType): AllCardTypes[] | undefined {
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
