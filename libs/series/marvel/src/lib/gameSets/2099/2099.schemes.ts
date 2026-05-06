import { HeroClass, SchemeDefinition } from '@schemetwister/libtwister';

import { marvelSeriesMeta } from '../../marvelSeriesMeta';
import { UNDERCOVER } from '../shield/shield.keywords';

import { META } from './2099.meta';

export const PULL_REALITY_INTO_CYBERSPACE = new SchemeDefinition({
  id: 'b8aae432-3d2a-4c53-8a98-1f196f81caab',
  name: 'Pull Reality into Cyberspace',
  gameSet: META,
  setup: '7 Twists, representing "Cyberspace"',
  specialRules: `Enemies under any Cyberspace get +1 ${marvelSeriesMeta.nomenclature.attack} for each Cyberspace on the board, and they can be fought with any combination of ${marvelSeriesMeta.nomenclature.purchase} and ${marvelSeriesMeta.nomenclature.attack}`,
  twist: `1-5: Put this Cyberspace above the rightmost city space that isn't yet under Cyberspace
6: Put this Cyberspace above the Mastermind
7: Evil Wins!`,
  evilWins: 'On Twist 7',
  meta: { numTwists: 7 },
});

export const BECOME_PRESIDENT_OF_THE_UNITED_STATES = new SchemeDefinition({
  id: '3e326daa-4b9b-46bd-9dc2-5f36b3df3394',
  name: 'Become President of the United States',
  gameSet: META,
  setup: '11 Twists',
  specialRules: `Once per turn, you may stack one of your non-grey Heroes next to the Scheme to earn "Ten Million Votes" for that Hero Name. If you do, you may also send one of your grey Heroes ${UNDERCOVER.name} as "Secret Service".`,
  twist:
    'If there\'s a Villain in the Bank or Streets, the Mastermind "vows to crush crime" and you stack this Twist next to the Mastermind as "Ten Million Votes". Otherwise, you may discard two cards to "counter negative advertising", shuffle this Twist back into the Villain Deck, and play another card from that deck. If you don\'t discard, stack this Twist next to the Mastermind as "Ten Million Votes"',
  evilWins:
    'When the Mastermind is elected President by having Forty Million more Votes than the highest-voted Hero Name',
  meta: { numTwists: 11 },
});

export const SUBJUGATE_EARTH_WITH_MEGA_CORPORATIONS = new SchemeDefinition({
  id: '7051f800-4439-4ceb-a2c0-e6483a11c495',
  name: 'Subjugate Earth with Mega-Corporations',
  gameSet: META,
  setup: 'Add an extra Hero. 11 Twists',
  twist: `Put the Hero from the HQ space under the Bank into a "Mega-Corp Domination" Stack matching it's Hero Class (off of the board). Do the listed effect for that Mega-Corp:
${HeroClass.STRENGTH}: Green Globe: Each player discards a card with a ${marvelSeriesMeta.nomenclature.purchase} icon.
${HeroClass.INSTINCT}: Alchemax: Each discards a ${HeroClass.INSTINCT} Hero or gains a wound.
${HeroClass.COVERT}: Public Eye: Each player discards two cards, then draws a card.
${HeroClass.TECH}: D/MONIX: Each player discards a card with an ${marvelSeriesMeta.nomenclature.attack} icon.
${HeroClass.RANGED}: Stark-Fujkawa: A Villain from your Victory Pile reenters the city.`,
  evilWins: 'When a single Mega-Corp has 3 Dominations',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.heroDeck.numHeroes++;
      return rule;
    },
  },
});

export const BEFOUL_EARTH_INTO_A_POLLUTED_WASTELAND = new SchemeDefinition({
  id: '804e720a-db93-48ad-8c06-c8bc5294f74e',
  name: 'Befoul Earth into a Polluted Wasteland',
  gameSet: META,
  setup: 'Add an extra Hero. 8 Twists representing "Toxic Sludge"',
  twist:
    'Put this Toxic Sludge under an HQ space. No space can have two Sludges unless all spaces already have one',
  specialRules: `To recruit a Hero you must also pay 2 ${marvelSeriesMeta.nomenclature.purchase} for each Toxic Sludge under it. During your turn, if there is any Sludge under the HQ, you may "flush the Toxic Sludge into the river". If you do, then KO all the Sludge and the Heroes in those HQ spaces and each player gains a Wound`,
  evilWins:
    'When the Hero Deck runs out of there are 8 Toxic SLidges under the HQ and/or in the river (KO pile)',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.heroDeck.numHeroes++;
      return rule;
    },
  },
});
