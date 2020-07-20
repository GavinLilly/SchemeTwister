import { LegendaryBystanders } from './lib/legendary';
import { BystanderModel } from '@legendizer/shared/bystander/types';

export { LegendaryBystanders };

export const ALL_BYSTANDERS: BystanderModel[] = [
  ...LegendaryBystanders.values(),
];
