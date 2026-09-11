import { SetOptional } from 'type-fest';
import { CARD_TYPE } from '../constants/card-type.const';
import { VictoryPileCard } from '../interfaces/victory-pile-card.interface';

import { CardGroup } from './card-group';

export interface BystanderConfig
  extends SetOptional<VictoryPileCard, 'victoryPoints'> {
  copies: number;
}

export class Bystander extends CardGroup implements VictoryPileCard {
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
