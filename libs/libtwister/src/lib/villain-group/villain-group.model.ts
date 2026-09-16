import { CARD_TYPE } from '../constants/card-type.const';
import { CardGroup } from '../shared/card-group';

export class VillainGroup extends CardGroup {
  get cardType() {
    return CARD_TYPE.villainGroup;
  }
}
