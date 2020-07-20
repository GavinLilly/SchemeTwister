import { LegendaryHenchmen } from './lib/legendary';
import { HenchmenModel } from '@legendizer/shared/henchmen/types';

export { LegendaryHenchmen };

export const ALL_HENCHMEN: HenchmenModel[] = [
  ...LegendaryHenchmen.values(),
];
