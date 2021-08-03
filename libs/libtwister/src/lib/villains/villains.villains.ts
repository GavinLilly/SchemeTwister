import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Villains as VillainsKeywords } from '../keywords';

import { IVillainGroup } from './villainGroup.interface';

type VillainGroupNames =
  | 'AVENGERS'
  | 'DEFENDERS'
  | 'MARVEL_KNIGHTS'
  | 'SPIDER_FRIENDS'
  | 'UNCANNY_AVENGERS'
  | 'UNCANNY_XMEN'
  | 'XMEN_FIRST_CLASS';

export const Villains: Record<VillainGroupNames, IVillainGroup> = {
  AVENGERS: {
    id: '5a6e5a2f-939c-4c7e-8d10-5261cf375553',
    name: 'Avengers',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Demolish, VillainsKeywords.Elusive],
  },
  DEFENDERS: {
    id: 'be582617-82af-4727-9528-1cb35561af56',
    name: 'Defenders',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
  },
  MARVEL_KNIGHTS: {
    id: 'b684fdfe-60ab-4af8-8b83-e46f7ebd708a',
    name: 'Marvel Knights',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
  },
  SPIDER_FRIENDS: {
    id: '04b86954-b605-48cb-beed-1e3121384c98',
    name: 'Spider Friends',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Elusive],
  },
  UNCANNY_AVENGERS: {
    id: '4ed437b8-13fc-4ebc-acf7-a4606396e928',
    name: 'Uncanny Avengers',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.XTremeAttack],
  },
  UNCANNY_XMEN: {
    id: 'd5602d88-f8aa-4f4c-87c7-7a70e56e732f',
    name: 'Uncanny X-Men',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Elusive, VillainsKeywords.XTremeAttack],
  },
  XMEN_FIRST_CLASS: {
    id: '38875e12-6cf7-434b-9215-687f7f17932d',
    name: 'X-Men First Class',
    cardType: CardType.VILLAINGROUP,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.XTremeAttack],
  },
};
