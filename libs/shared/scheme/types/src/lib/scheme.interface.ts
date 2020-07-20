import { IBase } from "@legendizer/shared/base/types";
import { VillainGroupModel } from "@legendizer/shared/villainGroup/types";
import { IRules } from "./rules.interface";

export interface IScheme extends IBase {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  numWounds?: number;
  requiredVillains?: VillainGroupModel;
  rules: IRules;
}
