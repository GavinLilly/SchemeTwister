import { IBase } from './base.interface';
import { GameSet } from '@legendizer/shared/gameSet/data';
import { IBaseBadGuy } from './baseBadGuy.interface';
import { BaseModel } from './base.model';

export abstract class BaseBadGuyModel<T extends IBaseBadGuy>
  extends BaseModel<IBaseBadGuy>
  implements IBaseBadGuy {

  attackPoints: number;
  victoryPoints: number;

  protected constructor(t: T) {
    super(t);
    this.attackPoints = t.attackPoints;
    this.victoryPoints = t.victoryPoints
  }

}
