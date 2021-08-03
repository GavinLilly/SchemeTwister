import { IBadGuyCard } from '../cardSet/badGuyCard.interface';

export interface IHenchmen extends IBadGuyCard {
  fight: string;
  ambush?: string;
  ability?: string;
}
