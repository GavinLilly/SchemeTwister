import { ICard } from "../cardSet/card.interface";
import { ITeam } from "../teams";

export interface IHero extends ICard {
  team?: ITeam;
}
