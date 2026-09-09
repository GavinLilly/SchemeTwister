import { ICardType } from '../interfaces/cardType.interface';
import { IGameSetMeta } from '../interfaces/gameSet.interface';
import { IKeyword } from '../interfaces/keyword.interface';
import { IPlayableObject } from '../interfaces/playableObject.interface';
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
