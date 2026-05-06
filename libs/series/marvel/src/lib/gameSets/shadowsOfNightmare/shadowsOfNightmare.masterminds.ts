import { MastermindWithEpic } from '@schemetwister/libtwister';

import { ASTRAL_PLANE, DEMONIC_BARGAIN } from './shadowsOfNightmare.keywords';
import { META } from './shadowsOfNightmare.meta';
import {
  FEAR_LORDS,
  LORDS_OF_NETHERWORLD,
} from './shadowsOfNightmare.villains';

export const DORMAMMU = new MastermindWithEpic(
  {
    id: '44f15c5d-86db-49d9-9eaa-6a98405a7ffd',
    attackPoints: 11,
    masterStrike:
      'Each player makes a Demonic Bargain with Dormammu to discard down to four cards.',
    name: 'Dormammu',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [LORDS_OF_NETHERWORLD],
    keywords: [DEMONIC_BARGAIN],
  },
  {
    id: '7faff6e6-d8a1-4bb1-bde0-edbc6873af68',
    attackPoints: 13,
    masterStrike:
      'Each player reveals the top card of their deck and discards it if it costs 0. Then each player makes a Demonic Bargain with Dormammu to discard down to three cards.',
  }
);

export const NIGHTMARE = new MastermindWithEpic(
  {
    id: 'abca8754-2331-462c-8b96-cee46ce9f00e',
    attackPoints: 6,
    masterStrike:
      'Nightmare enters the Astral Plane. If he was already there, each player discards a random card.',
    name: 'Nightmare',
    gameSet: META,
    victoryPoints: 6,
    alwaysLeads: [FEAR_LORDS],
    keywords: [ASTRAL_PLANE],
    specialRules:
      'When you fight Nightmare in the Astral Plane, instead of revealing a Tactic, KO one of your Heroes and Nightmare moves to the Mastermind Space.',
    escape:
      'Each player KOs one of their non-grey Heroes. Nightmare moves to the Mastermind space.',
  },
  {
    id: '85d2d78a-a56a-4bee-9c4b-4808bc6d9c00',
    attackPoints: 8,
    masterStrike:
      'Nightmare enters the Astral Plane. If he was already there, each player discards two random cards.',
  }
);
