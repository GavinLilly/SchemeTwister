import { IBadGuyCard } from "../cardSet/badGuyCard.interface";
import { Keyword } from "../cardSet/keyword.enum";
import { IHenchmen } from "../henchmen/henchmen.interface";
import { IVillainGroup } from "../villains/villainGroup.interface";

export interface IMastermind extends IBadGuyCard {
  alwaysLeads: Array<IHenchmen | IVillainGroup>;
  keyword?: Keyword;
}
