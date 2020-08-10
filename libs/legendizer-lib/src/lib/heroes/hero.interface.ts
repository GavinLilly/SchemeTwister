import { ICard } from "../cardSet/card.interface";
import { Team } from "./team.enum";

export interface IHero extends ICard {
  team?: Team;
}
