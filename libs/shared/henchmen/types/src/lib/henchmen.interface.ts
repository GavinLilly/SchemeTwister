import { IBaseBadGuy, Keyword } from "@legendizer/shared/base/types";

export interface IHenchmen extends IBaseBadGuy {
  fight: string;
  keyword?: Keyword;
}
