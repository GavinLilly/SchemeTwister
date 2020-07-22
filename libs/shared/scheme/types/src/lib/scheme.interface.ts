import { IBase } from "@legendizer/shared/base/types";
import { IVillainGroup } from "@legendizer/shared/villainGroup/types";
import { IHenchmen } from "@legendizer/shared/henchmen/types";
import { IHero } from "@legendizer/shared/hero/types";
import { IRules } from "./rules.interface";

interface IRequiredCards {
  inVillainDeck: IVillainGroup | IHenchmen | IHero;
}

export interface IScheme extends IBase {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  requiredCards?: IRequiredCards;
  rules: IRules;
}
