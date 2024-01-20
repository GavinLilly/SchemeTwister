import * as uuid from 'uuid';

import { nameSorter } from '../utils/nameSorter';

import { Bystander, Henchmen, Hero, Mastermind, VillainGroup } from './cards';
import { IGameSetMeta } from './interfaces';
import {
  AllCardTypes,
  CardType,
  GAME_SET_SIZE,
  GameSetSize,
  SchemeMinusRules,
  Series,
  SERIES,
} from './types';

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
    readonly henchmen?: Henchmen[],
    readonly bystanders?: Hero[] | Bystander[]
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
  public static sorter = (a: GameSet, b: GameSet): number =>
    b.size - a.size || nameSorter(a, b);

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
        series: SERIES.mainline,
        size: GAME_SET_SIZE.promo,
      },
      []
    );
  }

  /**
   * Gets all the cards in the game set
   * @returns An array of cards
   */
  public getCards(): AllCardTypes[];
  /**
   * Gets all the cards in the game set with the given type
   * @param cardType The type of card to get
   * @returns An array of cards
   */
  public getCards(cardType: CardType): AllCardTypes[] | undefined;
  // eslint-disable-next-line complexity
  public getCards(cardType?: CardType): AllCardTypes[] | undefined {
    if (cardType === undefined) {
      return [
        ...(this.bystanders ?? []),
        ...(this.schemes ?? []),
        ...(this.henchmen ?? []),
        ...this.heroes,
        ...(this.masterminds ?? []),
        ...(this.villains ?? []),
      ];
    }

    switch (cardType) {
      case 'Bystander':
        return this.bystanders;
      case 'Scheme':
        return this.schemes;
      case 'Henchmen':
        return this.henchmen;
      case 'Hero':
        return this.heroes;
      case 'Mastermind':
        return this.masterminds;
      case 'Villain Group':
        return this.villains;
      default:
        return undefined;
    }
  }
}
