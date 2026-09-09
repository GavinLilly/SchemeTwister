import { IFightable } from '../interfaces/fightable.interface';

import { CardGroup } from './card-group';

export abstract class FightableCardGroup
  extends CardGroup
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
