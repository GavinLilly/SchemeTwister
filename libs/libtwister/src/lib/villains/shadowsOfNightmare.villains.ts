import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  AstralPlane,
  DemonicBargain,
} from '../keywords/shadowsOfNightmare.keywords';
import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'LORDS_OF_NETHERWORLD' | 'FEAR_LORDS';

export const ShadowsOfNightmare: Record<VillainGroupNames, IVillainGroup> = {
  LORDS_OF_NETHERWORLD: {
    id: 'f356c475-f6ac-47a4-bf52-d7ccc813f89d',
    name: 'Lords of the Netherworld',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [DemonicBargain],
  },
  FEAR_LORDS: {
    id: '436d1a17-0888-46a0-8dce-2766d4ede478',
    name: 'Fear Lords',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [AstralPlane],
  },
};
