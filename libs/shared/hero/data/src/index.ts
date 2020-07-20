import { LegendaryHeroes } from './lib/legendary';
import { IHero } from '@legendizer/shared/hero/types';

export { LegendaryHeroes };

export const ALL_HEROES: IHero[] = Object.values(
  LegendaryHeroes
) as IHero[];
