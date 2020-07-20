import { LegendaryVillainGroups } from "./lib/legendary";
import { VillainGroupModel } from '@legendizer/shared/villainGroup/types';

export { LegendaryVillainGroups };

export const ALL_VILLAIN_GROUPS: VillainGroupModel[] = [
  ...LegendaryVillainGroups.values(),
]
