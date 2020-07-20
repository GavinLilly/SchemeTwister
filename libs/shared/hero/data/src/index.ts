import { LegendaryHeroes } from "./lib/legendary";
import { HeroModel } from '../../types/src/lib/hero.model';

export { LegendaryHeroes };

export const ALL_HEROES: HeroModel[] = [
  ...LegendaryHeroes.values(),
]
