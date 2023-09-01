import { IVictoryPileCard } from '../interfaces/victoryPileCard.interface';
import { CARD_TYPE } from '../types';

import { AbstractCardGroup } from './abstractCardGroup';

interface IBystander extends IVictoryPileCard {
  copies: number;
}

export class Bystander extends AbstractCardGroup implements IBystander {
  private readonly _copies: number;
  private readonly _victoryPoints: number;

  constructor(config: IBystander) {
    super(config);

    ({ copies: this._copies, victoryPoints: this._victoryPoints } = config);
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
