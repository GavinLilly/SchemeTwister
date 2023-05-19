import { IBadGuyCard } from './badGuy.interface';
import { ICardType } from './cardType.interface';

export interface IHenchmen extends IBadGuyCard, ICardType {
  fight: string;
  ambush?: string;
  ability?: string;
}
