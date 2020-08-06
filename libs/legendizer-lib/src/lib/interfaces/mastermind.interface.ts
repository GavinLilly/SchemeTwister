import { IBaseBadGuy } from "./baseBadGuy.interface";
import { IHenchmen } from "./henchmen.interface";
import { IVillainGroup } from "./villainGroup.interface";
import { Keyword } from "../enums/keyword.enum";

export interface IMastermind extends IBaseBadGuy {
  alwaysLeads: IHenchmen | IVillainGroup;
  keyword?: Keyword;
}
