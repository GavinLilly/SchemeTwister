import {
  DECK_TYPE,
  RequireCardInDeckScheme,
  RequireHero,
  RequireTeam,
  SchemeDefinition,
} from '../../../model';
import { GUARDIANS_OF_THE_GALAXY } from '../../teams';

import { META } from './mcuGuardiansOfTheGalaxy.meta';

export const INESCAPABLE_KYLN_SPACE_PRISON = new SchemeDefinition({
  id: 'a5f90df4-9aab-44b4-aed5-5089aa827e3d',
  name: 'Inescapable "Kyln" Space Prison',
  setup: '8 Twists. Add an extra Villain Group.',
  specialRules:
    'Heroes that start in or enter the HQ are "Imprisoned" face down, can\'t be recruited, and cost 0. You can spend 1Attack each to flip them face up.',
  twist: `Spend this amount this turn "for the escape plan" or else after you draw your new hand, gain a Wound then Imprison and mix up all Heroes in the HQ.
Twist 1-3: 3 Attack (Quarnyx Battery)
Twist 4-5: 5 Attack (Prison Control Device)
Twist 6: 6 Recruit (That Guy's Leg)
Twist 7: 7 Attack (Cassette Player)
Twist 8: Evil wins!`,
  evilWins: 'When 8 twists revealed',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
  gameSet: META,
});

export const PROVOKE_THE_SOVEREIGN_WAR_FLEET = new SchemeDefinition({
  id: '6df7a489-5207-4753-954f-9f221f075ab5',
  name: 'Provoke the Sovereign War Fleet',
  setup: '11 Twists. Add an extra Villain Group.',
  twist:
    'This Twist enters the city as a 2 Attack "Sovereign Omnicraft" Villain worth 1VP with "Fight: You get +1 Recruit." Each player shuffles all Twists from their Victory Piles back into the Villain Deck. Play another card from the Villain Deck.',
  evilWins: 'When 3 Omnicraft escape.',
  meta: {
    numTwists: 11,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
  gameSet: META,
});

export const STAR_LORDS_AWESOME_MIX_TAPE = new SchemeDefinition({
  id: 'b746d561-b6e6-4700-ae0d-a5d8edf26ad4',
  name: "Star-Lord's Awesome Mix Tape",
  setup:
    '7 Twists. Use 7 Heroes including at least one Guardians of the Galaxy Hero. Use double the normal number of Villain and Henchman Groups, but use only half the cards from each of those groups, randomly & secretly. (1 player: 2 Henchmen per group)',
  twist:
    'KO all Heroes from HQ. Villains in the Sewers and Bridge swap spaces. Likewise Villains in the Bank and Streets.',
  evilWins: 'When there are 32 non-grey Heroes in the KO pile.',
  meta: {
    numTwists: 7,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 7;
      rule.villainDeck.numVillainGroups *= 2;
      rule.villainDeck.numHenchmenGroups *= 2;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireTeam(GUARDIANS_OF_THE_GALAXY),
        new RequireHero(),
        DECK_TYPE.HERO,
      ],
    },
  },
  gameSet: META,
});

export const UNLEASH_THE_ABILISK_SPACE_MONSTER = new SchemeDefinition({
  id: '0e313503-e4ff-48ff-95a3-f36c40f0fd18',
  name: 'Unleash the Abilisk Space Monster',
  setup: '9 Twists',
  twist: `1-8: Put this Twist next the the Scheme as an "Abilisk Tentacle" Villain worth 4VP. It captures a non-grey Hero from your discard pile. Its Attack is 3 + the cost of that Hero. It has "Fight: KO one of your grey Heroes." A player of your choice gains the captured Hero." 2+ players:The player on your right plays a Tentacle from their Victory Pile, capturing from them.
Twist 9: Replay all the captured Tentacles.`,
  evilWins: 'When there are 5 Tentacles.',
  meta: { numTwists: 9 },
  gameSet: META,
});
