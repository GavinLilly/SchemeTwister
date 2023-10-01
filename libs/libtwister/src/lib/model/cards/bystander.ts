import { IVictoryPileCard } from '../interfaces/victoryPileCard.interface';
import { CARD_TYPE } from '../types';

import { AbstractCardGroup } from './abstractCardGroup';

interface IBystander extends IVictoryPileCard {
  copies: number;
}

export class Bystander extends AbstractCardGroup implements IBystander {
  private readonly _copies: number;
  private readonly _victoryPoints: number;

  constructor(
    config: Omit<IBystander, 'victoryPoints'> & Partial<IVictoryPileCard>
  ) {
    super(config);

    this._copies = config.copies;
    this._victoryPoints = config.victoryPoints ?? 1;
  }

  get cardType() {
    return CARD_TYPE.bystander;
  }

  get copies() {
    return this._copies;
  }

  get victoryPoints() {
    return this._victoryPoints;
  }
}
