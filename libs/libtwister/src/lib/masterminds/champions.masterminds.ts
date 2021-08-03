import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  DarkCity as DarkCityKeywords,
  Villains as VillainsKeywords,
  Champions as ChampionsKeywords,
} from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'FIN_FANG_FOOM'
  | 'PAGLIACCI'
  | 'EPIC_FIN_FANG_FOOM'
  | 'EPIC_PAGLIACCI';

export const Champions: Record<MastermindNames, IMastermind> = {
  FIN_FANG_FOOM: {
    id: 'c5cf4934-68cf-4ac6-9ac9-65a1f4307ff4',
    name: 'Fin Fang Foom',
    alwaysLeads: [VillainGroups.CHAMPIONS.MONSTERS_UNLEASHED],
    attackPoints: '20*',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CHAMPIONS,
    keywords: [VillainsKeywords.Demolish, ChampionsKeywords.SizeChanging],
  },
  PAGLIACCI: {
    id: 'bc34e995-15f6-4918-922d-7e3c1e6f1a12',
    name: 'Pagliacci',
    alwaysLeads: [VillainGroups.CHAMPIONS.WRECKING_CREW],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CHAMPIONS,
    keywords: [DarkCityKeywords.Versatile, VillainsKeywords.Demolish],
  },
  EPIC_FIN_FANG_FOOM: {
    id: '30469c57-f4e3-4255-b642-f37aa49eb6b9',
    name: 'Epic Fin Fang Foom',
    alwaysLeads: [VillainGroups.CHAMPIONS.MONSTERS_UNLEASHED],
    attackPoints: '24*',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CHAMPIONS,
    keywords: [VillainsKeywords.Demolish, ChampionsKeywords.SizeChanging],
  },
  EPIC_PAGLIACCI: {
    id: '10fdfc96-fd5d-402f-945e-f800d83fd7ea',
    name: 'Epic Pagliacci',
    alwaysLeads: [VillainGroups.CHAMPIONS.WRECKING_CREW],
    attackPoints: '11',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.CHAMPIONS,
    keywords: [DarkCityKeywords.Versatile, VillainsKeywords.Demolish],
  },
};
