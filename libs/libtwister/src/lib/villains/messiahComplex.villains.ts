import { IVillainGroup } from '.';
import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { ChivalrousDuel } from '../keywords/antMan.keywords';
import { Clone, Prey, Shatter } from '../keywords/messiahComplex.keywords';

type VillainGroupNames = 'CLAN_YASHIDA' | 'ACOLYTES' | 'REAVERS' | 'PURIFIERS';

export const MessiahComplex: Record<VillainGroupNames, IVillainGroup> = {
  CLAN_YASHIDA: {
    id: '229ecfc3-83db-4e1e-a6c4-c056d3d3536c',
    name: 'Clan Yashida',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [ChivalrousDuel],
  },
  ACOLYTES: {
    id: '757bdfff-557e-4423-a25a-52ae7b4b2c85',
    name: 'Acolytes',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Shatter],
  },
  REAVERS: {
    id: 'f4afd9d4-79d0-4c91-9943-804bfa826927',
    name: 'Reavers',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Prey],
  },
  PURIFIERS: {
    id: '432d06df-af81-4fbe-81b2-dca0fc97af38',
    name: 'Purifiers',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Prey, Clone],
  },
};
