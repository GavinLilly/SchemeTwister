import { GameSet } from "@legendizer/shared/gameSet/types";

export interface Base {
  id: string;
  name: string;
  gameSet: GameSet;
}

export interface BaseBadGuy extends Base {
  attackPoints: number;
  victoryPoints: number;
}
