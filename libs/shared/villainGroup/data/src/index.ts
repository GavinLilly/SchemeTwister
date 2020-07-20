import { LegendaryVillainGroups } from "./lib/legendary";
import { IVillainGroup } from '@legendizer/shared/villainGroup/types';

export { LegendaryVillainGroups };

export const ALL_VILLAIN_GROUPS: IVillainGroup[] = Object.values(
  LegendaryVillainGroups
) as IVillainGroup[];
