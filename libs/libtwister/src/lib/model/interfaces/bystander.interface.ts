import { ICard } from './card.interface';

export interface IBystander extends ICard {
  copies: number;
  victoryPoints: number;
}
