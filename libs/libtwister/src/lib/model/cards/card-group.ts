import { CardType } from '../constants/card-type.const';
import { ICardType } from '../interfaces/card-type.interface';
import { IGameSetMeta } from '../interfaces/game-set.interface';
import { IKeyword } from '../interfaces/keyword.interface';
import { IPlayableObject } from '../interfaces/playable-object.interface';

export abstract class CardGroup implements IPlayableObject, ICardType {
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
