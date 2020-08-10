import { ICard } from "./card.interface";

export interface IBadGuyCard extends ICard {
  attackPoints: number | string;
  victoryPoints: number;
}
