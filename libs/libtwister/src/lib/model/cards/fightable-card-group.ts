import { Fightable } from '../interfaces/fightable.interface';

import { CardGroup } from './card-group';

export abstract class FightableCardGroup
  extends CardGroup
  implements Fightable
{
  public readonly attackPoints: string | number;
  public readonly victoryPoints: number;

  constructor(config: Fightable) {
    super(config);

    this.attackPoints = config.attackPoints;
    this.victoryPoints = config.victoryPoints;
  }
}
