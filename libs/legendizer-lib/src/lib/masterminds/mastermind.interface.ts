import { IBadGuyCard } from "../cardSet/badGuyCard.interface";
import { IHenchmen } from "../henchmen/henchmen.interface";
import { IVillainGroup } from "../villains/villainGroup.interface";
import { Keyword } from "../cardSet/keyword.enum";

export interface IMastermind extends IBadGuyCard {
  alwaysLeads: IHenchmen | IVillainGroup;
  keyword?: Keyword;
}
