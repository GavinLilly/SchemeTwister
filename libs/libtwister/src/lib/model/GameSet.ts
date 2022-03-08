import { AbstractMastermind } from './AbstractMastermind';
import { AbstractScheme } from './AbstractScheme';
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
    readonly schemes?: AbstractScheme[],
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

  public get(cardType: CardType): ICard[] | undefined {
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
