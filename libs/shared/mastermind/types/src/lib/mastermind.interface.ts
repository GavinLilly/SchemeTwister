import { IBaseBadGuy } from '@legendizer/shared/base/types';
import { IHenchmen } from '@legendizer/shared/henchmen/types';
import { IVillainGroup } from '@legendizer/shared/villainGroup/types';
import { Keyword } from '@legendizer/shared/base/types';

export interface IMastermind extends IBaseBadGuy {
  alwaysLeads: IHenchmen | IVillainGroup;
  keyword?: Keyword;
}
