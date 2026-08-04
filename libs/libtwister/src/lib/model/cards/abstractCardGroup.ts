import {
  ICardType,
  IGameSetMeta,
  IKeyword,
  IPlayableObject,
} from '../interfaces';
import { CardType } from '../types/cardType.type';

export abstract class AbstractCardGroup implements IPlayableObject, ICardType {
  public readonly id: string;
  public readonly name: string;
  public readonly gameSet: IGameSetMeta;
  public readonly keywords: IKeyword[];

  /** The type of the card */
  public abstract readonly cardType: CardType;

  constructor(config: IPlayableObject) {
    this.id = config.id;
    this.name = config.name;
    this.gameSet = config.gameSet;
    this.keywords = config.keywords ?? [];
  }

  public toString(): string {
    return this.name;
  }
}
