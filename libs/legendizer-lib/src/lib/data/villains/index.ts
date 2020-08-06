import { IVillainGroup } from "../../interfaces";

import { Legendary } from "./legendary.villains";
import { DarkCity } from "./darkCity.villains";

export const AllVillains: Array<IVillainGroup> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
