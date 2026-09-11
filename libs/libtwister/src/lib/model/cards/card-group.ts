import { CardType } from '../constants/card-type.const';
import { GameSet } from '../game-set';
import { ICardType } from '../interfaces/card-type.interface';
import { Keyword } from '../interfaces/keyword.interface';
import { PlayableObject } from '../interfaces/playable-object.interface';

export abstract class CardGroup implements PlayableObject, ICardType {
  public readonly id: string;
  public readonly name: string;
  public readonly gameSet: GameSet;
  public readonly keywords: Keyword[];

  /** The type of the card */
  public abstract readonly cardType: CardType;

  constructor(config: PlayableObject) {
    this.id = config.id;
    this.name = config.name;
    this.gameSet = config.gameSet;
    this.keywords = config.keywords ?? [];
  }

  public toString(): string {
    return this.name;
  }
}
