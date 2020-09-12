import { IBadGuyCard } from "../cardSet/badGuyCard.interface";
import { Keyword } from "../cardSet/keyword.enum";

export interface IHenchmen extends IBadGuyCard {
  fight: string;
  keyword?: Keyword;
  ambush?: string;
  ability?: string;
}
