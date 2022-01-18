import { IMastermind } from '.';
import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Prey, Shatter } from '../keywords/messiahComplex.keywords';
import { VillainGroups } from '../villains';

type MastermindNames =
  | 'LADY_DEATHSTRIKE'
  | 'EPIC_LADY_DEATHSTRIKE'
  | 'BASTION'
  | 'EPIC_BASTION'
  | 'EXODUS'
  | 'EPIC_EXODUS';

export const MessiahComplex: Record<MastermindNames, IMastermind> = {
  LADY_DEATHSTRIKE: {
    id: '901cc1e3-9adf-4d81-94c0-57ff75feaee5',
    name: 'Lady Deathstrike',
    alwaysLeads: [VillainGroups.MESSIAH_COMPLEX.REAVERS],
    attackPoints: 8,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Prey],
  },
  EPIC_LADY_DEATHSTRIKE: {
    id: '9b26e13e-e7aa-4f05-87a1-e4e4cb2e5c28',
    name: 'Epic Lady Deathstrike',
    alwaysLeads: [VillainGroups.MESSIAH_COMPLEX.REAVERS],
    attackPoints: 11,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Prey],
  },
  BASTION: {
    id: '767c7f38-fc44-4e89-afea-4ffa272127ee',
    name: 'Bastion',
    alwaysLeads: [
      VillainGroups.MESSIAH_COMPLEX.PURIFIERS,
      Henchmen.LEGENDARY.SENTINELS,
    ],
    attackPoints: '4+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
  },
  EPIC_BASTION: {
    id: '9a57529c-2530-4341-8938-0b1eebece406',
    name: 'Epic Bastion',
    alwaysLeads: [
      VillainGroups.MESSIAH_COMPLEX.PURIFIERS,
      Henchmen.LEGENDARY.SENTINELS,
    ],
    attackPoints: '6+',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
  },
  EXODUS: {
    id: 'c015a218-c854-4a04-a9c8-5e595b79b831',
    name: 'Exodus',
    alwaysLeads: [VillainGroups.MESSIAH_COMPLEX.ACOLYTES],
    attackPoints: '32*',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Shatter],
  },
  EPIC_EXODUS: {
    id: '59ac6b60-6365-4eb1-85cb-5ef8693b324f',
    name: 'Epic Exodus',
    alwaysLeads: [VillainGroups.MESSIAH_COMPLEX.ACOLYTES],
    attackPoints: '36*',
    victoryPoints: 7,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.MESSIAH_COMPLEX,
    keywords: [Shatter],
  },
};
