import { ICard } from './card.interface';

export interface IBadGuyCard extends ICard {
  readonly attackPoints: number | string;
  readonly victoryPoints: number;
}
