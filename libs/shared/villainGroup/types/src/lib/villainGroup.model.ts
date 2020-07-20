import { BaseModel } from '@legendizer/shared/base/types';
import { IVillainGroup } from './villainGroup.interface';

export class VillainGroupModel extends BaseModel<IVillainGroup>
  implements IVillainGroup {

  private static VALUES: VillainGroupModel[] = [];

  protected constructor(villainGroup: IVillainGroup) {
    super(villainGroup);

    VillainGroupModel.VALUES.push(this);
  }

  public static values() {
    return VillainGroupModel.VALUES;
  }
}
