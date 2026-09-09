import { CARD_TYPE } from '../constants/card-type.const';
import { IVictoryPileCard } from '../interfaces/victory-pile-card.interface';

import { CardGroup } from './card-group';

interface IBystander extends IVictoryPileCard {
  copies: number;
}

export type BystanderConfig = Omit<IBystander, 'victoryPoints'> &
  Partial<IVictoryPileCard>;

export class Bystander extends CardGroup implements IBystander {
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
