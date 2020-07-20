import { IBaseBadGuy } from '@legendizer/shared/base/types';
import { HenchmenModel } from '@legendizer/shared/henchmen/types';
import { VillainGroupModel } from '@legendizer/shared/villainGroup/types';
import { Keyword } from '@legendizer/shared/base/types';

export interface IMastermind extends IBaseBadGuy {
  alwaysLeads: HenchmenModel | VillainGroupModel;
  keyword?: Keyword;
}
