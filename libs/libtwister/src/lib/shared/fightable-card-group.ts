import { CardGroup } from './card-group';
import { Fightable } from './fightable.interface';


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
