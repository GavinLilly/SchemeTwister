import { Keyword, BaseModel } from "@legendizer/shared/base/types";
import { IHenchmen } from './henchmen.interface';

export class HenchmenModel extends BaseModel<IHenchmen> implements IHenchmen {
  private static VALUES: HenchmenModel[] = []
  fight: string;
  attackPoints: number;
  victoryPoints: number;
  keyword?: Keyword;

  protected constructor(henchmen: IHenchmen) {
    super(henchmen);
    this.fight = henchmen.fight;
    this.attackPoints = henchmen.attackPoints;
    this.victoryPoints = henchmen.victoryPoints;
    this.keyword = henchmen.keyword;

    HenchmenModel.VALUES.push(this);
  }

  public static values() {
    return HenchmenModel.VALUES;
  }
}
