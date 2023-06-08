import { ICard } from './card.interface';
import { ICardType } from './cardType.interface';

export interface IBystander extends ICard, ICardType {
  copies: number;
  victoryPoints: number;
}
