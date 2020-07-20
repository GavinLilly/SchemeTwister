import { GameSet } from "@legendizer/shared/gameSet/data";
import { CardType } from "./cardType.enum";

export interface IBase {
  id: string;
  name: string;
  gameSet: GameSet;
  cardType: CardType;
}
