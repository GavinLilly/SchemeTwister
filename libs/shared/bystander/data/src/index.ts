import { LegendaryBystanders } from './lib/legendary';
import { IBystander } from '@legendizer/shared/bystander/types';

export { LegendaryBystanders };

export const ALL_BYSTANDERS: IBystander[] = Object.values(
  LegendaryBystanders
) as IBystander[];
