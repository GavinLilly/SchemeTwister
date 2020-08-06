import { IHenchmen } from "../../interfaces";

import { Legendary } from "./legendary.henchmen";
import { DarkCity } from "./darkCity.henchmen";

export const AllHenchmen: Array<IHenchmen> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
