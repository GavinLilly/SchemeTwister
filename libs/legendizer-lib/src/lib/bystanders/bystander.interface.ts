import { ICard } from "../cardSet/card.interface";

export interface IBystander extends ICard {
  copies: number;
  victoryPoints: number;
}
