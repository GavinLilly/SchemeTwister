import {
  DECK_TYPE,
  RequireCard,
  RequireCardInDeckScheme,
  RequireVillainGroup,
  SchemeDefinition,
} from '../../../model';

import { WALL_CRAWL } from './paintTheTownRed.keywords';
import { META } from './paintTheTownRed.meta';
import { SINISTER_SIX } from './paintTheTownRed.villains';

export const THE_CLONE_SAGA = new SchemeDefinition({
  id: '650a925c-d835-4a42-ac59-9a54e2ee3e08',
  name: 'The Clone Saga',
  setup: '8 Twists.',
  twist: `Each player reveals two non-grey Heroes with the same card name or discards down to 3 cards.`,
  evilWins:
    'When 2 Villains with the same card name have escaped or the Villain Deck runs out',
  meta: { numTwists: 8 },
  gameSet: META,
});

export const INVADE_THE_DAILY_BUGLE_NEWS_HQ = new SchemeDefinition({
  id: 'bb4f86d6-8002-4bb4-abde-6b0e90ad132a',
  name: 'Invade the Daily Bugle News HQ',
  setup:
    '8 Twists. Add 6 extra Henchmen from a single Henchman Group to the Hero Deck.',
  specialRules: 'You can fight Villains in the HQ.',
  twist: `KO a Hero from the HQ. Put the highest-Attack Villain from the city into that HQ space.`,
  evilWins: 'When there are 5 Villains in the HQ.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.heroDeck.numHenchmenGroups = 1;
      return rule;
    },
  },
  gameSet: META,
});

export const SPLICE_HUMANS_WITH_SPIDER_DNA = new SchemeDefinition({
  id: '89a783c0-006e-49b2-91fd-8c7cf4d314d3',
  name: 'Splice Humans with Spider DNA',
  setup: '8 Twists. Include Sinister Six as one of the Villain Groups.',
  specialRules:
    'Sinister Six Villains get +3 Attack. All Hero cards have Wall-Crawl.',
  twist: `Each player puts a Sinister Six Villain from their Victory Pile on top of the Villain Deck. No matter how many players did so, play a single card from the Villain Deck.`,
  evilWins:
    'When 6 Sinister Six Villains have escaped or the Villain Deck runs out.',
  keywords: [WALL_CRAWL],
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(SINISTER_SIX),
        new RequireVillainGroup(),
        DECK_TYPE.villain,
      ],
    },
  },
  gameSet: META,
});

export const WEAVE_AWEB_OF_LIES = new SchemeDefinition({
  id: '395e0e98-ad58-48e9-aa4a-5d20024ab848',
  name: 'Weave a Web of Lies',
  setup: '7 twists',
  twist: `Stack this Twist next to the Mastermind.`,
  specialRules:
    "Whenever you defeat a Villain, you may pay 1 Recruit. If you do, rescue a Bystander. You can't fight the Mastermind unless you have a Bystander in your Victory Pile for each Twist next to the Mastermind.",
  evilWins: 'When there are 7 twists next to the Mastermind',
  meta: { numTwists: 7 },
  gameSet: META,
});
