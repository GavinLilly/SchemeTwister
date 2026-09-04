import { createMockGamesetMeta } from '../mocks/mockUtils';
import {
  RequireCardName,
  RequireHenchmen,
  RequireHero,
  SoloBannedScheme,
} from '../model';
import { SchemeDefinition } from '../model/cards/schemeDefinition';
import { RequireCard } from '../model/schemes/cardInDeck/requireCard';
import { RequireCardInDeckScheme } from '../model/schemes/cardInDeck/requireCardInDeckScheme';
import { RequireVillainGroup } from '../model/schemes/cardInDeck/requireVillainGroup';
import { DECK_TYPE } from '../model/types/deckType.type';

import { TEST_GAME_SET_META_1, TEST_GAME_SET_META_2 } from './gameSets';
import { TEST_HENCHMEN_1 } from './henchmen';
import { TEST_KEYWORD_1 } from './keywords';
import { TEST_VILLAIN_1 } from './villains';

export const TEST_NORMAL_SCHEME = new SchemeDefinition({
  id: '51410050-32e0-4cc4-981b-0e02268127f7',
  name: 'Test scheme 1',
  setup: '8 Twists. 12 total Bystanders in the Villain Deck.',
  specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
  twist:
    'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
  evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numBystanders = 12;
      return rule;
    },
  },
  gameSet: createMockGamesetMeta(),
});

export const TEST_SOLO_BANNED_SCHEME = new SchemeDefinition({
  id: '3de7a49f-17a4-4968-84bf-9356243f8a0b',
  name: 'Test Solo-banned scheme',
  setup: '8 Twists. Add an extra Henchman group to the Villain Deck.',
  twist: 'Play the top 2 cards of the Villain Deck.',
  evilWins: 'If 12 Villains escape.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numHenchmenGroups++;
      return rule;
    },
    overrideScheme: {
      schemeType: SoloBannedScheme,
    },
  },
  gameSet: createMockGamesetMeta(),
});

export const TEST_HERO_IN_VILLAIN_DECK_SCHEME = new SchemeDefinition({
  id: '51410050-32e0-4cc4-981b-0e02268127f7',
  name: 'Hero in villain deck scheme',
  setup: '8 Twists. 12 total Bystanders in the Villain Deck.',
  specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
  twist:
    'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
  evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numBystanders = 12;
      rule.villainDeck.numHeroes = 1;
      return rule;
    },
  },
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_REQUIRE_CARD_IN_DECK_SCHEME = new SchemeDefinition({
  id: 'f0728254-a7b5-481c-993a-9af34c9ad5d0',
  name: 'Test require card in deck scheme',
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
      rule.heroDeck.numHeroes = 6;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(TEST_VILLAIN_1),
        new RequireVillainGroup(),
        DECK_TYPE.villain,
      ],
    },
  },
  gameSet: TEST_GAME_SET_META_2,
});

export const TEST_REQUIRE_CARD_NAME_IN_HERO_DECK_SCHEME = new SchemeDefinition({
  id: '3a64b756-7ed7-4dd9-a930-e76acda748fb',
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
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [new RequireCardName('Bar'), new RequireHero(), DECK_TYPE.hero],
    },
  },
  gameSet: TEST_GAME_SET_META_2,
  keywords: [TEST_KEYWORD_1],
});

export const TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME = new SchemeDefinition({
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
  gameSet: TEST_GAME_SET_META_2,
  keywords: [TEST_KEYWORD_1],
});

export const TEST_REQUIRE_HENCHMEN_IN_ADDITIONAL_DECK = new SchemeDefinition({
  id: '01b42c1f-22f0-4e0b-851c-a2ec357f757e',
  name: 'Test Require Henchmen in Additional Deck',
  setup: '8 Twists. Stack 2 Cops per player next to this Plot.',
  twist: `Each player returns all Cops from their Victory Pile to the Cop Stack. Then each player puts a non-grey Ally from their hand in front of them. Put a Cop from the Cop Stack on top of each of those Allies.`,
  evilWins:
    'When a Twist must put out a Cop, but the Cop Stack is already empty.',
  specialRules:
    'You can fight any Cop on top of Allies. If you do, the player of your choice gains that Ally.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'Cop stack',
        deck: {
          numHenchmenGroups: 1,
        },
      });
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(TEST_HENCHMEN_1),
        new RequireHenchmen(),
        DECK_TYPE.additional,
      ],
    },
  },
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_REQUIRE_VILLAINS_IN_ADDITIONAL_DECK = new SchemeDefinition({
  id: '37a16e45-b759-44a6-85c3-6ca20b3cdb79',
  name: 'Test Require Villain Group in Additional Deck',
  setup: '8 Twists. Stack 2 Cops per player next to this Plot.',
  twist: `Each player returns all Cops from their Victory Pile to the Cop Stack. Then each player puts a non-grey Ally from their hand in front of them. Put a Cop from the Cop Stack on top of each of those Allies.`,
  evilWins:
    'When a Twist must put out a Cop, but the Cop Stack is already empty.',
  specialRules:
    'You can fight any Cop on top of Allies. If you do, the player of your choice gains that Ally.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'Villain stack',
        deck: {
          numVillainGroups: 1,
        },
      });
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(TEST_VILLAIN_1),
        new RequireVillainGroup(),
        DECK_TYPE.additional,
      ],
    },
  },
  gameSet: TEST_GAME_SET_META_1,
});
