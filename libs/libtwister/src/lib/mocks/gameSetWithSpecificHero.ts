import { faker } from '@faker-js/faker';

import {
  DECK_TYPE,
  GAME_SET_SIZE,
  Hero,
  RequireCardInDeckScheme,
  RequireCardName,
  RequireHero,
  SchemeDefinition,
} from '../model';
import { MockGameSetFactory } from './mockGameSetFactory';
import { createMockGamesetMeta, createMockKeywords } from './mockUtils';

const GAME_SET_META = createMockGamesetMeta();

const FOO_HERO = new Hero({
  id: faker.string.uuid(),
  name: 'Test hero 5 - Foo',
  gameSet: GAME_SET_META,
});

export const MOCK_REQUIRE_CARD_NAME_IN_DECK_SCHEME = new SchemeDefinition({
  id: '062ad1c0-abe4-4cf8-b4a8-f9fb68f1d210',
  name: 'Test require card name in deck scheme',
  setup:
    '8 Twists. 6 Heroes. Skrull Villain Group required. Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
  specialRules:
    "Heroes in the Villain Deck count as Skrull Villains with Attack equal to the Hero's Cost +2. If you defeat that Hero, you gain it.",
  twist:
    'The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.',
  evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 4;
      rule.additionalDeck.push({
        name: 'Test heroes with Foo in name',
        deck: { numHeroes: 1 },
      });
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCardName('Foo'),
        new RequireHero(),
        DECK_TYPE.additional,
      ],
    },
  },
  gameSet: GAME_SET_META,
  keywords: createMockKeywords(),
});

const MOCK_GAME_SET_FACTORY = new MockGameSetFactory();

const MOCK_GAME_SET_WITH_SPECIFIC_HERO_AND_SCHEME =
  MOCK_GAME_SET_FACTORY.createGameSet(GAME_SET_SIZE.core);
MOCK_GAME_SET_WITH_SPECIFIC_HERO_AND_SCHEME.schemes?.push(
  MOCK_REQUIRE_CARD_NAME_IN_DECK_SCHEME
);
MOCK_GAME_SET_WITH_SPECIFIC_HERO_AND_SCHEME.heroes.push(FOO_HERO);

export { MOCK_GAME_SET_WITH_SPECIFIC_HERO_AND_SCHEME };
