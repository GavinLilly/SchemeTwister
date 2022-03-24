import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import {
  AstralPlane,
  DemonicBargain,
} from '../keywords/shadowsOfNightmare.keywords';
import { VillainGroups } from '../villains';
import { IMastermind } from './mastermind.interface';

type MastermindNames =
  | 'DORMAMMU'
  | 'EPIC_DORMAMMU'
  | 'NIGHTMARE'
  | 'EPIC_NIGHTMARE';

export const ShadowsOfNightmare: Record<MastermindNames, IMastermind> = {
  DORMAMMU: {
    id: '44f15c5d-86db-49d9-9eaa-6a98405a7ffd',
    name: 'Dormammu',
    alwaysLeads: [VillainGroups.SHADOWS_OF_NIGHTMARE.LORDS_OF_NETHERWORLD],
    attackPoints: 11,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [DemonicBargain],
  },
  EPIC_DORMAMMU: {
    id: '7faff6e6-d8a1-4bb1-bde0-edbc6873af68',
    name: 'Epic Dormammu',
    alwaysLeads: [VillainGroups.SHADOWS_OF_NIGHTMARE.LORDS_OF_NETHERWORLD],
    attackPoints: 13,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [DemonicBargain],
  },
  NIGHTMARE: {
    id: 'abca8754-2331-462c-8b96-cee46ce9f00e',
    name: 'Nightmare',
    alwaysLeads: [VillainGroups.SHADOWS_OF_NIGHTMARE.FEAR_LORDS],
    attackPoints: 6,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [AstralPlane],
  },
  EPIC_NIGHTMARE: {
    id: '85d2d78a-a56a-4bee-9c4b-4808bc6d9c00',
    name: 'Epic Nightmare',
    alwaysLeads: [VillainGroups.SHADOWS_OF_NIGHTMARE.FEAR_LORDS],
    attackPoints: 8,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.SHADOWS_OF_NIGHTMARE,
    keywords: [AstralPlane],
  },
};
