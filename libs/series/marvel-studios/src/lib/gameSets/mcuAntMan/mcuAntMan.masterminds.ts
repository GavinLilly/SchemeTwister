import { TransformingMastermind, HeroClass } from '@schemetwister/libtwister';
import {
  CONQUEROR,
  MICROSCOPIC_SIZE_CHANGING,
} from '@schemetwister/schemetwister-series-marvel-common';

import { DOUBLE_CROSS } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';
import {
  ARMADA_OF_KANG,
  CROSS_TECHNOLOGIES,
  GHOST_CHASERS,
} from './mcuAntMan.villains';

export const DARREN_CROSS_YELLOWJACKET = new TransformingMastermind(
  {
    id: 'f08d4674-0eb3-4c5c-b6cf-fd56374a4a86',
    name: 'Darren Cross',
    gameSet: META,
    victoryPoints: 6,
    attackPoints: '8+',
    masterStrike: 'Darren Cross Double-Crosses each player. Then he Transforms',
    alwaysLeads: [CROSS_TECHNOLOGIES],
    keywords: [CONQUEROR, DOUBLE_CROSS, MICROSCOPIC_SIZE_CHANGING],
  },
  {
    name: 'Yellowjacket',
    attackPoints: '12*',
    masterStrike: `Each player discards a ${HeroClass.INSTINCT} Hero or Size-Changing Hero or gains a Wound. Yellowjacket Transforms.`,
  }
);

export const GHOST = new TransformingMastermind(
  {
    id: 'c9c93f6f-6aaa-4c53-9d99-dde0c78c9113',
    name: 'Ghost, Master Thief',
    gameSet: META,
    victoryPoints: 6,
    attackPoints: '8+',
    specialRules:
      "Ghost gets +1 attack for each different cost among her 'Kidnapped Victims'. While this side is face up, you may recruit cards from her Kidnapped Victims (in any order), spending 2 purchase extract for each",
    masterStrike: `Each player reveals a ${HeroClass.INSTINCT} Hero or discards two cards with buy icons. Ghost Transforms`,
    alwaysLeads: [GHOST_CHASERS],
  },
  {
    name: 'Ghost, Intangible',
    attackPoints: '6*',
    masterStrike: `Each player discards a ${HeroClass.COVERT} Hero or puts a non-grey Hero from their hand or discard pile next to Ghost as a 'Kidnapped Victim. Ghost Transforms.`,
    specialRules:
      "You can't fight Ghost unless you made at least 6 purchase this turn",
  }
);

export const KANG = new TransformingMastermind(
  {
    id: 'f7b1aaf7-2025-49d4-bab0-dcd7959a1123',
    name: 'Kang, Quantum Conqueror',
    gameSet: META,
    victoryPoints: 7,
    attackPoints: '11+',
    masterStrike: `Each player discards a ${HeroClass.STRENGTH} Hero or gains a wound. Put a random Timeline Variant Villain face up in the 'Multiverse' space. Kang Transforms`,
    alwaysLeads: [ARMADA_OF_KANG],
    ruleOverride: (rule) => {
      rule.additionalDeck.push({
        name: 'Timeline Variants',
        deck: {
          numVillainGroups: 1,
        },
      });
      return rule;
    },
    keywords: [CONQUEROR, DOUBLE_CROSS],
  },
  {
    name: 'Kang, Multiverse Conqueror',
    attackPoints: '10+',
    specialRules:
      "While either side of Kang is face up, the 'Multiverse' is a space to his left that can hold multiple Villains. You can fight them (in any order) only while this side is face up",
    masterStrike:
      'If there are any Villains in the Multiverse, each player gains a Wound. Then a Villain from the Multiverse enters an empty space among the Rooftops, Streets or Bridge. Kang Transforms.',
  }
);
