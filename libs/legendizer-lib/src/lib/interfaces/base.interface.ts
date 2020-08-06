import { GameSet } from '../enums/gameSet.enum';
import { CardType } from "../enums/cardType.enum";

export interface IBase {
  id: string;
  name: string;
  gameSet: GameSet;
  cardType: CardType;
}

