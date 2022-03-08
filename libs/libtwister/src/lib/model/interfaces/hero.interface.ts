import { ICard } from './card.interface';
import { ITeam } from './team.interface';

export interface IHero extends ICard {
  team?: ITeam;
}
