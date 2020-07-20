import { BaseBadGuyModel } from '@legendizer/shared/base/types';
import { HenchmenModel } from '@legendizer/shared/henchmen/types';
import { VillainGroupModel } from '@legendizer/shared/villainGroup/types';
import { Keyword } from '@legendizer/shared/base/types';
import { IMastermind } from "./mastermind.interface";

export class MastermindModel extends BaseBadGuyModel<IMastermind>
  implements IMastermind {

  private static VALUES: MastermindModel[] = [];
  alwaysLeads: HenchmenModel | VillainGroupModel;
  keyword?: Keyword;

  protected constructor(mastermind: IMastermind) {
    super(mastermind);
    this.alwaysLeads = mastermind.alwaysLeads;
    this.keyword = mastermind.keyword;
  }

  public static values() {
    return MastermindModel.VALUES;
  }
}
