import { ICard } from './card.interface';
import { ICardType } from './cardType.interface';
import { ITeam } from './team.interface';

export interface IHero extends ICard, ICardType {
  team?: ITeam;
}
