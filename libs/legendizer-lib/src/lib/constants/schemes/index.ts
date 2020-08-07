import { IScheme } from "../../interfaces";

import { Legendary } from "./legendary.schemes";
import { DarkCity } from "./darkCity.schemes";

export const AllSchemes: Array<IScheme> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
