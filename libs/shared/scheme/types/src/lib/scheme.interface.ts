import { IBase } from "@legendizer/shared/base/types";
import { IVillainGroup } from "@legendizer/shared/villainGroup/types";
import { IHenchmen } from "@legendizer/shared/henchmen/types";
import { IRules } from "./rules.interface";

export interface IScheme extends IBase {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  numWounds?: number;
  requiredVillains?: IVillainGroup | IHenchmen;
  rules: IRules;
}
