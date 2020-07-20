import { LegendarySchemes } from "./lib/legendary";
import { IScheme } from "@legendizer/shared/scheme/types";

export { LegendarySchemes };

export const ALL_SCHEMES: IScheme[] = Object.values(
  LegendarySchemes
) as IScheme[];
