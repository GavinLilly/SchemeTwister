import { CardType } from '../cardType.enum';
import { ICardType, IPlayableObject } from '../interfaces';

import { AbstractCardGroup } from './abstractCardGroup';

export class VillainGroup extends AbstractCardGroup {
  get cardType() {
    return CardType.VILLAINGROUP;
  }

  public static isVillainGroup = (
    card: (IPlayableObject & ICardType) | undefined
  ): card is VillainGroup => card?.cardType === CardType.VILLAINGROUP;
}
