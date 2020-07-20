import { LegendarySchemes } from "./lib/legendary";
import { SchemeModel } from '../../types/src/lib/scheme.model';

export { LegendarySchemes };

export const ALL_SCHEMES: SchemeModel[] = [
  ...LegendarySchemes.values()
]
