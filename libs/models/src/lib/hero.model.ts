import { IHero } from '@legendizer/api-interfaces';
import { Base } from './base.model';

export class Hero extends Base implements IHero {
  name: string;
  team?: string;
}
