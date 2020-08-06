import { IBaseBadGuy } from "./baseBadGuy.interface";
import { Keyword } from "../enums/keyword.enum";

export interface IHenchmen extends IBaseBadGuy {
  fight: string;
  keyword?: Keyword;
}
