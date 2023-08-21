import { IFightable } from '../interfaces';

import { AbstractCardGroup } from './abstractCardGroup';

export abstract class AbstractFightableCardGroup
  extends AbstractCardGroup
  implements IFightable
{
  private readonly _attackPoints: string | number;
  private readonly _victoryPoints: number;

  constructor(config: IFightable) {
    super(config);

    ({ attackPoints: this._attackPoints, victoryPoints: this._victoryPoints } =
      config);
  }

  get attackPoints() {
    return this._attackPoints;
  }

  get victoryPoints() {
    return this._victoryPoints;
  }
}
