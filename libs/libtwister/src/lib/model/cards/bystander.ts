import { IVictoryPileCard } from '../interfaces/victoryPileCard.interface';
import { CARD_TYPE } from '../types/cardType.type';

import { AbstractCardGroup } from './abstractCardGroup';

interface IBystander extends IVictoryPileCard {
  copies: number;
}

export type BystanderConfig = Omit<IBystander, 'victoryPoints'> &
  Partial<IVictoryPileCard>;

export class Bystander extends AbstractCardGroup implements IBystander {
  public readonly copies: number;
  public readonly victoryPoints: number;

  constructor(config: BystanderConfig) {
    super(config);

    this.copies = config.copies;
    this.victoryPoints = config.victoryPoints ?? 1;
  }

  get cardType() {
    return CARD_TYPE.bystander;
  }
}
