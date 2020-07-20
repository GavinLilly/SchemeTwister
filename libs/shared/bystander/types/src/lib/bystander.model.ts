import { Keyword, BaseModel } from '@legendizer/shared/base/types';
import { IBystander } from './bystander.interface';

export class BystanderModel extends BaseModel<IBystander>
  implements IBystander {

  private static VALUES: BystanderModel[] = [];
  copies: number;
  victoryPoints: number;
  keyword?: Keyword;

  protected constructor(bystander: IBystander) {
    super(bystander);
    this.copies = bystander.copies;
    this.victoryPoints = bystander.victoryPoints;

    BystanderModel.VALUES.push(this);
  }

  public static values() {
    return BystanderModel.VALUES;
  }
}
