import { MastermindWithEpic } from '@schemetwister/libtwister';

import { KeywordName } from '../../keywordName.enum';

import { MASS_MOMENTUM } from './annihilation.keywords';
import { META } from './annihilation.meta';
import { ANNIHILATION_WAVE, TIMELINES_OF_KANG } from './annihilation.villains';

export const ANNIHILUS = new MastermindWithEpic(
  {
    id: '0db4044f-d88e-4fab-835e-55243ccec0f8',
    attackPoints: '10+',
    specialRules: `${KeywordName.MASS_MOMENTUM} 2`,
    masterStrike:
      "Reveal the top card of the Villain Deck. If it's a Bystander, Annihilus captures it. If it's a Villain, it enters the city, captures a Bystander, and moves forward an extra space (before doing any Ambush ability).",
    gameSet: META,
    name: 'Annihilus',
    victoryPoints: 6,
    alwaysLeads: [ANNIHILATION_WAVE],
    keywords: [MASS_MOMENTUM],
  },
  {
    id: '1b6c9f4c-fddd-45fb-b4f0-b5a2f3316e16',
    attackPoints: '12+',
    specialRules: `${KeywordName.MASS_MOMENTUM} 4`,
    masterStrike:
      "Play a card from the Villain Deck. If it's a Villain, play a second card from the Villain Deck.",
  }
);

export const KANG_THE_CONQUEROR = new MastermindWithEpic(
  {
    id: 'c80a223b-cbf5-44ac-823f-f3647792e0a1',
    attackPoints: '8+',
    specialRules: `Kang has ${KeywordName.CONQUEROR} 2 for each city space under a Time Incursion. (He benefits from Villains there.) Villains under a Time Incursion get +2 Attack.`,
    masterStrike:
      'This Strike becomes a "Time Incursion." Put it above the rightmost city space that doesn\'t yet have a Time Incursion.',
    gameSet: META,
    name: 'Kang the Conqueror',
    victoryPoints: 6,
    alwaysLeads: [TIMELINES_OF_KANG],
  },
  {
    id: '334b2b68-157d-4d9b-b249-fa69df1ec74d',
    attackPoints: '10+',
    specialRules: `Kang has ${KeywordName.CONQUEROR} 3 for each city space under a Time Incursion. (He benefits from Villains there.) Villains under a Time Incursion get +3 Attack.`,
    masterStrike:
      'This Strike becomes a "Time Incursion." Put it above the rightmost city space that doesn\'t yet have a Time Incursion. If there are any Villains in any Time Incursions, each player gains a Wound.',
  }
);
