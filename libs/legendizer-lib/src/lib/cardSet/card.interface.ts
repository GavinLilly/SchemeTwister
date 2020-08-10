import { IGameSet } from '../gamesets';
import { CardType } from "./cardType.enum";

export interface ICard {
  id: string;
  name: string;
  gameSet: IGameSet;
  cardType: CardType;
}

