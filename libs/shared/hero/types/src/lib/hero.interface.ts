import { IBase } from "@legendizer/shared/base/types";
import { Team } from "./team.enum";

export interface IHero extends IBase {
  team?: Team;
}
