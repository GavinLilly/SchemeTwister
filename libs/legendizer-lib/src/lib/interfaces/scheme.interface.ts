import { IBase } from "./base.interface";
import { IVillainGroup } from "./villainGroup.interface";
import { IHenchmen } from "./henchmen.interface";
import { IHero } from "./hero.interface";
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
