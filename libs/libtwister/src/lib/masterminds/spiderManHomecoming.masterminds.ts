import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { SpiderManHomecoming as SpiderManHomecomingKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'ADRIAN_TOOMES'
  | 'VULTURE'
  | 'EPIC_ADRIAN_TOOMES'
  | 'EPIC_VULTURE';

export const SpiderManHomecoming: Record<MastermindNames, IMastermind> = {
  ADRIAN_TOOMES: {
    id: '2b7ede2e-4f67-4152-9dcd-e91ae624c454',
    name: 'Adrian Toomes',
    alwaysLeads: [VillainGroups.SPIDERMAN_HOMECOMING.SALVAGERS],
    attackPoints: '5+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
    keywords: [
      SpiderManHomecomingKeywords.DangerSense,
      SpiderManHomecomingKeywords.Striker,
    ],
  },
  VULTURE: {
    id: '5826e339-b396-4b55-95bd-cb1867bb7991',
    name: 'Vulture',
    alwaysLeads: [VillainGroups.SPIDERMAN_HOMECOMING.VULTURE_TECH],
    attackPoints: '8+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
    keywords: [
      SpiderManHomecomingKeywords.DangerSense,
      SpiderManHomecomingKeywords.Striker,
    ],
  },
  EPIC_ADRIAN_TOOMES: {
    id: 'a06ffef2-06a0-4475-9110-ebe5ca46402e',
    name: 'Epic Adrian Toomes',
    alwaysLeads: [VillainGroups.SPIDERMAN_HOMECOMING.SALVAGERS],
    attackPoints: '5+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
    keywords: [
      SpiderManHomecomingKeywords.DangerSense,
      SpiderManHomecomingKeywords.Striker,
    ],
  },
  EPIC_VULTURE: {
    id: 'c172fb7e-ff79-4837-b5cf-974ee4148c81',
    name: 'Vulture',
    alwaysLeads: [VillainGroups.SPIDERMAN_HOMECOMING.VULTURE_TECH],
    attackPoints: '10+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SPIDERMAN_HOMECOMING,
    keywords: [
      SpiderManHomecomingKeywords.DangerSense,
      SpiderManHomecomingKeywords.Striker,
    ],
  },
};
