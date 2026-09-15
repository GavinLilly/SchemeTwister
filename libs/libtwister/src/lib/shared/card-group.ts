import { CardType } from '../constants/card-type.const';
import { GameSetProps } from '../game-set/game-set';
import { ICardType } from './card-type.interface';
import { Keyword } from './keyword.interface';
import { PlayableObject } from './playable-object.interface';

export abstract class CardGroup implements PlayableObject, ICardType {
  public readonly id: string;
  public readonly name: string;
  public readonly gameSet: GameSetProps;
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
