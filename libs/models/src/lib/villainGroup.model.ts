import { IVillainGroup } from '@legendizer/api-interfaces';
import { Base } from './base.model';

export class VillainGroup extends Base implements IVillainGroup {
  // API public members
  name: string;
}
