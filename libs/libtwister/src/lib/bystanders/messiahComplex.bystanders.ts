import { IBystander } from '.';
import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Clone, Shatter } from '../keywords/messiahComplex.keywords';
import { Investigate } from '../keywords/noir.keywords';

type BystanderNames =
  | 'OPERA_SINGER'
  | 'CLONE_TECHNICIAN'
  | 'PRIVATE_INVESTIGATOR';

export const MessiahComplex: Record<BystanderNames, IBystander> = {
  OPERA_SINGER: {
    id: '7937511e-ac43-4678-972f-35608d94a1dd',
    name: 'Opera Singer',
    copies: 1,
    victoryPoints: 1,
    gameSet: GameSets.MESSIAH_COMPLEX,
    cardType: CardType.BYSTANDER,
    keywords: [Shatter],
  },
  CLONE_TECHNICIAN: {
    id: 'e8efc6f5-d2c1-4ffd-b247-67f0ffdac470',
    name: 'Clone Technician',
    copies: 1,
    victoryPoints: 1,
    gameSet: GameSets.MESSIAH_COMPLEX,
    cardType: CardType.BYSTANDER,
    keywords: [Clone],
  },
  PRIVATE_INVESTIGATOR: {
    id: 'c14f28ce-979c-4efe-bbd1-24b6fbe2f081',
    name: 'Private Investigator',
    copies: 1,
    victoryPoints: 1,
    gameSet: GameSets.MESSIAH_COMPLEX,
    cardType: CardType.BYSTANDER,
    keywords: [Investigate],
  },
};
