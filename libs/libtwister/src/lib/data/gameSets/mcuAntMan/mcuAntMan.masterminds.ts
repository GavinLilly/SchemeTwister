import { Mastermind } from '../../../model';
import { HeroClass } from '../../enums';
import { MICROSCOPIC_SIZE_CHANGING } from '../antMan/antMan.keywords';
import { CONQUEROR } from '../marvelStudios/marvelStudios.keywords';

import { DOUBLE_CROSS } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';
import {
  ARMADA_OF_KANG,
  CROSS_TECHNOLOGIES,
  GHOST_CHASERS,
} from './mcuAntMan.villains';

export const DARREN_CROSS = new Mastermind({
  id: 'f08d4674-0eb3-4c5c-b6cf-fd56374a4a86',
  name: 'Darren Cross / Yellowjacket',
  gameSet: META,
  victoryPoints: 6,
  attackPoints: '8+ / 12*',
  masterStrike: 'Darren Cross Double-Crosses each player. Then he Transforms',
  alwaysLeads: [CROSS_TECHNOLOGIES],
  keywords: [CONQUEROR, DOUBLE_CROSS, MICROSCOPIC_SIZE_CHANGING],
});

export const GHOST = new Mastermind({
  id: 'c9c93f6f-6aaa-4c53-9d99-dde0c78c9113',
  name: 'Ghost',
  gameSet: META,
  victoryPoints: 6,
  attackPoints: '8+ / 6*',
  masterStrike: `Each player reveals a ${HeroClass.INSTINCT} Hero or discards two cards with buy icons. Ghost Transforms`,
  alwaysLeads: [GHOST_CHASERS],
});

// TODO add the ability to have multiple additional decks
export const KANG = new Mastermind({
  id: 'f7b1aaf7-2025-49d4-bab0-dcd7959a1123',
  name: 'Kang',
  gameSet: META,
  victoryPoints: 7,
  attackPoints: '11+ / 10+',
  masterStrike: `Each player discards a ${HeroClass.STRENGTH} Hero or gains a wound. Put a random Timeline Variant Villain face up in the 'Multiverse' space. Kang Transforms`,
  alwaysLeads: [ARMADA_OF_KANG],
  ruleOverride: (rule) => {
    rule.additionalDeck = {
      name: 'Timeline Variants',
      deck: {
        numVillainGroups:
          (rule.additionalDeck?.deck?.numVillainGroups ?? 0) + 1,
      },
    };
    return rule;
  },
  keywords: [CONQUEROR, DOUBLE_CROSS],
});
