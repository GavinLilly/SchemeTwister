import { ICard } from "../cardSet/card.interface";
import { IVillainGroup } from "../villains/villainGroup.interface";
import { IHenchmen } from "../henchmen/henchmen.interface";
import { IHero } from "../heroes/hero.interface";
import { IRules } from "./rules.interface";

interface IRequiredCards {
  inVillainDeck: IVillainGroup | IVillainGroup[] | IHenchmen | IHero;
}

export interface IScheme extends ICard {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  requiredCards?: IRequiredCards;
  rules: IRules;
}
