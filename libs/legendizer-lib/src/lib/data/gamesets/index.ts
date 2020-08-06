import { IGameSet } from "../../interfaces";

import { Legendary } from "./legendary.gameset";
import { DarkCity } from "./darkCity.gameset";

export const AllGamesets: Array<IGameSet> = [
  Legendary,
  DarkCity
];

export { Legendary, DarkCity };
