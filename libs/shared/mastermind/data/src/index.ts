import { LegendaryMasterminds } from "./lib/legendary";
import { MastermindModel } from '../../types/src/lib/mastermind.model';

export { LegendaryMasterminds };

export const ALL_MASTERMINDS: MastermindModel[] = [
  ...LegendaryMasterminds.values()
]
