import { CARD_TYPE } from '../types';

import { AbstractCardGroup } from './abstractCardGroup';

export class VillainGroup extends AbstractCardGroup {
  get cardType() {
    return CARD_TYPE.villainGroup;
  }
}
