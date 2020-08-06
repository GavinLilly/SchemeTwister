import { IBystander } from "../../interfaces";

import { Legendary } from "./legendary.bystanders";
import { DarkCity } from "./darkCity.bystanders";

export const AllBystanders: Array<IBystander> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
