import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Noir as NoirKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames = 'GOBLINS_FREAK_SHOW' | 'XMEN_NOIR';

export const Noir: Record<VillainGroupNames, IVillainGroup> = {
  GOBLINS_FREAK_SHOW: {
    id: '815b3ca9-d3f0-43b3-9d9c-8cf8fd32fd33',
    name: "Goblin's Freak Show",
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.NOIR,
    keywords: [NoirKeywords.HiddenWitness],
  },
  XMEN_NOIR: {
    id: 'f331d3a1-0014-418d-a774-2847a7a79c38',
    name: 'X-Men Noir',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.NOIR,
    keywords: [NoirKeywords.Investigate],
  },
};
