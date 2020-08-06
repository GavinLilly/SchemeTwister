import { IHero } from "../../interfaces";

import { Legendary } from "./legendary.heroes";
import { DarkCity } from "./darkCity.heroes";

export const AllHeroes: Array<IHero> = [
  ...Object.values(Legendary),
  ...Object.values(DarkCity)
];

export { Legendary, DarkCity };
