import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Villains as VillainsKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames = 'DR_STRANGE' | 'NICK_FURY' | 'ODIN' | 'PROFESSOR_X';

export const Villains: Record<MastermindNames, IMastermind> = {
  DR_STRANGE: {
    id: '18f47d4e-6af2-4732-a34c-3a0c6a9bfb4f',
    name: 'Dr. Strange',
    alwaysLeads: [VillainGroups.VILLAINS.DEFENDERS],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VILLAINS,
  },
  NICK_FURY: {
    id: 'cd333220-d49a-4307-a48e-8511ccb597f6',
    name: 'Nick Fury',
    alwaysLeads: [VillainGroups.VILLAINS.AVENGERS],
    attackPoints: '9',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.Demolish],
  },
  ODIN: {
    id: '5fc8c65b-a616-4424-9145-58fbbdcf31c0',
    name: 'Odin',
    alwaysLeads: [Henchmen.VILLAINS.ASGARDIAN_WARRIORS],
    attackPoints: '10',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VILLAINS,
  },
  PROFESSOR_X: {
    id: 'bb9fcd0b-6391-4971-9099-634c661f36e2',
    name: 'Professor X',
    alwaysLeads: [VillainGroups.VILLAINS.XMEN_FIRST_CLASS],
    attackPoints: '8',
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.VILLAINS,
    keywords: [VillainsKeywords.XTremeAttack],
  },
};
