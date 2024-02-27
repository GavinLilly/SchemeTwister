import { MastermindWithEpic } from '@schemetwister/libtwister';
import { EMPOWERED } from '@schemetwister/schemetwister-series-marvel-common';

import { META } from './blackPanther.meta';
import {
  ENEMIES_OF_WAKANDA,
  KILLMONGERS_LEAGUE,
} from './blackPanther.villains';

export const KILLMONGER = new MastermindWithEpic(
  {
    id: '48ab2fc0-7745-472c-a902-93df093ae08d',
    name: 'Killmonger',
    attackPoints: '5*',
    specialRules:
      'While Killmonger has more than 0 Attack, you cannot fight him. Instead, you may spend Attack equal to his Attack to Wound him and get +1 Recruit.',
    masterStrike:
      "Each player must reveal 4 different Hero Classes or gain one of the Wounds on Killmonger. Any playere who can't do wither must discard down to 4 cards.",
    gameSet: META,
    victoryPoints: 4,
    alwaysLeads: [KILLMONGERS_LEAGUE],
  },
  {
    id: '2a52145a-379a-4b30-85a4-5295edd7526c',
    attackPoints: '6*',
    specialRules:
      'While Killmonger has more than 0 Attack, you cannot fight him. Instead, you may spend Attack equal to his Attack to Wound him and get +1 Recruit. When you do fight him, each other player gains one of his Wounds.',
    masterStrike:
      "Each player gains a Wound. Gain them from Killmonger's Wounds if possible.",
  }
);

export const KLAW = new MastermindWithEpic(
  {
    id: '256cc621-c0bc-4fd6-868a-c3ca6b6616d7',
    name: 'Klaw',
    attackPoints: '8+',
    masterStrike:
      'Put the top card of the Hero Deck next to Klaw as a "Sonic Frequency," putting any previous Frequency on the bottom of the Hero Deck. Each player must reveal a card that shares a color with it or gain a Wound.',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [ENEMIES_OF_WAKANDA],
    keywords: [EMPOWERED],
    specialRules:
      'Klaw is Double Empowered by the color(s) of his "Sonic Frequency."',
  },
  {
    id: '73ab549c-38d4-4ebd-a513-9992664e9fcd',
    attackPoints: '10+',
    masterStrike:
      'Put the top card of the Hero Deck next to Klaw as a "Sonic Frequency." Put any previous Frequency and each card from the HQ that does not share a color with the new Frequency on the bottom of the Hero Deck. Each player gains a Wound.',
  }
);
