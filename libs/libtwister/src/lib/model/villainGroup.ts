import { AbstractCardGroup } from './cardGroup';
import { CardType } from './cardType.enum';

export class VillainGroup extends AbstractCardGroup {
  get cardType() {
    return CardType.VILLAINGROUP;
  }
}
