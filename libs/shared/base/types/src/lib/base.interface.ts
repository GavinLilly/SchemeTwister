import { IGameSet } from "@legendizer/shared/gameSet/types";
import { CardType } from "./cardType.enum";

export interface IBase {
  id: string;
  name: string;
  gameSet: IGameSet;
  cardType: CardType;
}
