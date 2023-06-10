import { CardType } from '../cardType.enum';
import { IVictoryPileCard } from '../interfaces/victoryPileCard.interface';

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
    return CardType.BYSTANDER;
  }

  get copies() {
    return this._copies;
  }

  get victoryPoints() {
    return this._victoryPoints;
  }
}
