import { CardType } from '../enums';
import { IGameSet } from '../gamesets';
import { IKeyword } from '../keywords/keyword.interface';

export interface ICard {
  id: string;
  name: string;
  gameSet: IGameSet;
  cardType: CardType;
  keywords?: IKeyword[];
}
