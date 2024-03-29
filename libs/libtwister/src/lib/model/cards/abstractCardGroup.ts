import {
  IPlayableObject,
  IGameSetMeta,
  IKeyword,
  ICardType,
} from '../interfaces';
import { CardType } from '../types/cardType.type';

export abstract class AbstractCardGroup implements IPlayableObject, ICardType {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _gameSet: IGameSetMeta;
  private readonly _keywords: IKeyword[];

  /** The type of the card */
  public abstract readonly cardType: CardType;

  constructor(config: IPlayableObject) {
    ({ id: this._id, name: this._name, gameSet: this._gameSet } = config);

    this._keywords = config.keywords ?? [];
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get gameSet() {
    return this._gameSet;
  }

  get keywords() {
    return this._keywords;
  }

  public toString(): string {
    return this.name;
  }
}
