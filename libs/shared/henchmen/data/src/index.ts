import { LegendaryHenchmen } from './lib/legendary';
import { IHenchmen } from '@legendizer/shared/henchmen/types';

export { LegendaryHenchmen };

export const ALL_HENCHMEN: IHenchmen[] = Object.values(
  LegendaryHenchmen
) as IHenchmen[];
