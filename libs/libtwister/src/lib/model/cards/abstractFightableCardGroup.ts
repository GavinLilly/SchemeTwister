import { IFightable } from '../interfaces/fightable.interface';

import { AbstractCardGroup } from './abstractCardGroup';

export abstract class AbstractFightableCardGroup
  extends AbstractCardGroup
  implements IFightable
{
  public readonly attackPoints: string | number;
  public readonly victoryPoints: number;

  constructor(config: IFightable) {
    super(config);

    this.attackPoints = config.attackPoints;
    this.victoryPoints = config.victoryPoints;
  }
}
