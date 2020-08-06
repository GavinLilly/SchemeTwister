import { IBase } from "./base.interface";
import { Team } from "../enums/team.enum";

export interface IHero extends IBase {
  team?: Team;
}
