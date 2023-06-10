import { CardType } from '../cardType.enum';

import { AbstractCardGroup } from './abstractCardGroup';

export class VillainGroup extends AbstractCardGroup {
  get cardType() {
    return CardType.VILLAINGROUP;
  }
}
