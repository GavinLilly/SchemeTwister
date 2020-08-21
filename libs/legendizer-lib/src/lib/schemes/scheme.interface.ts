import { ICard } from "../cardSet/card.interface";
import { IHenchmen } from "../henchmen/henchmen.interface";
import { IHero } from "../heroes/hero.interface";
import { IVillainGroup } from "../villains/villainGroup.interface";
import { IRules } from "./rules.interface";

interface IRequiredCards {
  inVillainDeck: {
    villains?: IVillainGroup[];
    henchmen?: IHenchmen[];
    heroes?: IHero[];
  }
}

export interface IScheme extends ICard {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  requiredCards?: IRequiredCards;
  rules: IRules;
}
