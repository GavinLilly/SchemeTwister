import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { AntMan as AntManKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'ULTRONS_LEGACY' | 'QUEENS_VENGEANCE';

export const AntMan: Record<VillainGroupNames, IVillainGroup> = {
  ULTRONS_LEGACY: {
    id: 'ac9173ae-138c-41ca-a4c8-945d1e09ffcd',
    name: "Ultron's Legacy",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.ANT_MAN,
    keywords: [
      AntManKeywords.MicroscopicSizeChanging,
      AntManKeywords.SizeChanging,
      AntManKeywords.Empowered,
    ],
  },
  QUEENS_VENGEANCE: {
    id: 'cd0cfd2c-6b04-4385-bee1-573ee311af17',
    name: "Queen's Vengeance",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.ANT_MAN,
    keywords: [
      AntManKeywords.MicroscopicSizeChanging,
      AntManKeywords.ChivalrousDuel,
    ],
  },
};
