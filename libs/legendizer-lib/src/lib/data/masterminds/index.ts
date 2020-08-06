import { IMastermind } from "../../interfaces";

import { Legendary } from "./legendary.masterminds";
import { DarkCity } from "./darkCity.masterminds";

export const AllMasterminds: Array<IMastermind> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
