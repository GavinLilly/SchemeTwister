import { Base } from './base.model';
import { IHenchmen } from '@legendizer/api-interfaces';

export class Henchmen extends Base implements IHenchmen {
  name: string;
  fight: string;
  attackPoints: number;
  victoryPoints: number;
}
