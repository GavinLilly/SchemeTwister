import { SchemeDefinition } from '@schemetwister/libtwister';

import { META } from './fantasticFour.meta';

export const BATHE_THE_EARTH_IN_COSMIC_RAYS = new SchemeDefinition({
  id: 'f1c60929-2ba6-4f35-b0fe-dc21a04fc32a',
  name: 'Bathe the Earth in Cosmic Rays',
  setup: '6 Twists.',
  twist: `Each player in turn does the following: Reveal your hand. KO one of your non-grey Heroes. Choose a Hero from the HQ with the same or lower cost and put it into your hand.`,
  evilWins:
    'When the number of non-grey Heroes in the KO pile is six times the number of players.',
  meta: { numTwists: 6 },
  gameSet: META,
});

export const FLOOD_THE_PLANET_WITH_MELTED_GLACIERS = new SchemeDefinition({
  id: '069749f1-d285-45c9-b7db-c2b6ca6881d5',
  name: 'Flood the Planet with Melted Glaciers',
  setup: '8 twists.',
  twist: `Stack the Twist next to the Scheme as "Rising Waters." Then KO each Hero from the HQ whose cost is less than or equal to the number of Rising Waters in that stack.`,
  evilWins: "When 20 non-grey Heroes are KO'd.",
  meta: { numTwists: 8 },
  gameSet: META,
});

export const INVINCIBLE_FORCE_FIELD = new SchemeDefinition({
  id: '0d4dd374-ad11-49cf-a877-61fea85799f1',
  name: 'Invincible Force Field',
  setup: '7 twists',
  twist: `Stack this Twist next to the Mastermind as a "Force Field."`,
  specialRules:
    'To fight the Mastermind, you must also spend 1 Recruit or 1 Attack for each Force Field next to them.',
  evilWins: 'On the 7th twist',
  meta: { numTwists: 7 },
  gameSet: META,
});

export const PULL_REALITY_INTO_THE_NEGATIVE_ZONE = new SchemeDefinition({
  id: '3555b355-604b-48b4-9372-2063d476450a',
  name: 'Pull Reality Into the Negative Zone',
  setup: '8 Twists.',
  twist: `2, 4, and 6: Until the next Twist, Enemies cost Recruit to fight and Heroes cost Attack to recruit.`,
  evilWins: 'On the 7th twist',
  meta: { numTwists: 8 },
  gameSet: META,
});
