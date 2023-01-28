import { IBadGuyCard } from './badGuy.interface';

export interface IHenchmen extends IBadGuyCard {
  fight: string;
  ambush?: string;
  ability?: string;
}
