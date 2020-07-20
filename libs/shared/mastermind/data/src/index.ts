import { LegendaryMasterminds } from "./lib/legendary";
import { IMastermind } from "@legendizer/shared/mastermind/types";

export { LegendaryMasterminds };

export const ALL_MASTERMINDS: IMastermind[] = Object.values(
  LegendaryMasterminds
) as IMastermind[];
