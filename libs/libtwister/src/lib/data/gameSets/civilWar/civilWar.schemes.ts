import { SchemeDefinition } from '../../../model';
import { AVENGERS, X_MEN, SPIDER_FRIENDS, MARVEL_KNIGHTS } from '../../teams';

import { FORTIFY, SHIELD_CLEARANCE } from './civilWar.keywords';
import { META } from './civilWar.meta';

export const AVENGERS_VS_XMEN = new SchemeDefinition({
  id: 'ed12b424-cdf5-4b78-ad31-a014c646891e',
  name: 'Avengers vs. X-Men',
  setup: `9 Twists. Hero Deck has 3 Heroes of one Team and 3 Heroes of another Team. (${AVENGERS}, ${X_MEN}, ${SPIDER_FRIENDS}, ${MARVEL_KNIGHTS} etc.)`,
  twist: `Twist 1-7: Each player reveals their hand. Each player that has cards of both those teams gains a Wound.
Twist 8: Evil wins!`,
  evilWins: 'When 8 twists revealed',
  meta: { numTwists: 9 },
  gameSet: META,
});

export const DARK_REIGN_OF_HAMMER_OFFICERS = new SchemeDefinition({
  id: '22daba46-79c4-4b15-9b72-bbd296f15b21',
  name: 'Dark Reign of H.A.M.M.E.R. Officers',
  setup: '7 Twists.',
  twist: `Stack this Twist next to the Scheme. Then, for each Twist in that stack, put a S.H.I.E.L.D. Officer next to the Mastermind as a 3 Attack Villain with S.H.I.E.L.D. Clearance. You can fight them to gain them as Heroes.`,
  evilWins: 'When there are 7 Officers next to the Mastermind.',
  keywords: [SHIELD_CLEARANCE],
  meta: { numTwists: 7 },
  gameSet: META,
});

export const EPIC_SUPER_HERO_CIVIL_WAR = new SchemeDefinition({
  id: '2f8a37d6-071d-48fb-b40a-cbee5d54584c',
  name: 'Epic Super Hero Civil War',
  setup:
    '1 player 4 Heroes in Hero Deck. 1-3 players 9 Twists. 4-5 players 6 Twists.',
  twist: `Stack this Twist next to the Scheme. Then, for each Twist in that stack, KO a Hero from the HQ and immediately refill that HQ space.`,
  evilWins: 'When the Hero Deck runs out.',
  meta: {
    numTwists: {
      '1': 9,
      '2': 9,
      '3': 9,
      '4': 6,
      '5': 6,
    },
    rules: (rule, numPlayers) => {
      if (numPlayers === 1) {
        rule.heroDeck.numHeroes = 4;
      }
      return rule;
    },
  },
  gameSet: META,
});

export const IMPRISON_UNREGISTERED_SUPERHUMANS = new SchemeDefinition({
  id: 'bd5e4333-d8e4-43a2-be2e-35bfe6490c4b',
  name: 'Imprison Unregistered Superhumans',
  setup: '11 Twists.',
  twist: `Twist 1, 3, 5, 7, 9: This Scheme fortifies the city space to its right starting with the Bridge. Villains in that space get +1 Attack.`,
  evilWins: 'When 3 Bystanders are in the KO pile and/or Escape Pile.',
  keywords: [FORTIFY],
  meta: { numTwists: 11 },
  gameSet: META,
});

export const NITRO_THE_SUPERVILLAIN_THREATENS_CROWDS = new SchemeDefinition({
  id: 'b73d1b78-5567-42b5-a24f-5060b684b87f',
  name: 'Nitro the Supervillain Threatens Crowds',
  setup: '8 Twists.',
  twist: `KO all Bystanders held by Villains. Then, the Villain with the highest Attack captures 3 Bystanders.`,
  evilWins: 'When 15 Bystanders are in the KO pile and/or Escape Pile.',
  meta: { numTwists: 8 },
  gameSet: META,
});

export const PREDICT_FUTURE_CRIME = new SchemeDefinition({
  id: 'c3c39452-f2a8-442a-b348-bb405c078a04',
  name: 'Predict Future Crime',
  setup: '6 Twists. Add an extra Villain Group.',
  twist: `Reveal the top 3 cards of the Villain Deck. Play each Villain you revealed. Put the rest back in any order.`,
  evilWins: 'When there are 2 Villains per player in the Escape Pile.',
  meta: {
    numTwists: 6,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
  gameSet: META,
});

export const REVEAL_HEROES_SECRET_IDENTITIES = new SchemeDefinition({
  id: 'a337a91e-d497-4f2e-af9b-b1bf2e5297d2',
  name: "Reveal Heroes' Secret Identities",
  setup: '6 Twists. 7 Heroes in Hero Deck.',
  twist: `Put a Hero from the HQ next to the Scheme as an "Unmasked" Hero. All cards with "Unmasked" Hero Names cost +1 Recruit to recruit. You can't Unmask a Hero Name that has already been Unmasked.`,
  evilWins: 'When 5 Heroes are Unmasked.',
  meta: {
    numTwists: 6,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 7;
      return rule;
    },
  },
  gameSet: META,
});

export const UNITED_STATES_SPLIT_BY_CIVIL_WAR = new SchemeDefinition({
  id: 'f302a8ca-cbc4-44a2-a3b1-8359553f7a30',
  name: 'United States Split by Civil War',
  setup: '10 Twists.',
  twist: `If there is a Villain on the Streets or Bridge, put this Twist in a stack of "Western States Victories." Otherwise, if there is a Villain in the Sewers, put this Twist in a stack of "Eastern States Victories."`,
  evilWins: 'When there are 3 Western Victories or 3 Eastern Victories.',
  meta: { numTwists: 10 },
  gameSet: META,
});
