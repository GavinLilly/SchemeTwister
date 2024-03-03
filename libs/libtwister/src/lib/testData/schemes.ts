import { RequireCardName, RequireHenchmen, RequireHero } from '../model';
import { SchemeDefinition } from '../model/cards/schemeDefinition';
import { PlayerPicksAHeroScheme } from '../model/schemes/PlayerPicksAHeroScheme';
import { RequireVillainAndHeroWithBackupInVillainDeckScheme } from '../model/schemes/RequireVillainAndHeroWithBackupInVillainDeck.Scheme';
import { SoloBannedScheme } from '../model/schemes/SoloBannedScheme';
import { RequireCard } from '../model/schemes/cardInDeck/requireCard';
import { RequireCardInDeckScheme } from '../model/schemes/cardInDeck/requireCardInDeckScheme';
import { RequireVillainGroup } from '../model/schemes/cardInDeck/requireVillainGroup';
import { DECK_TYPE } from '../model/types/deckType.type';

import { TEST_GAME_SET_META_1, TEST_GAME_SET_META_2 } from './gameSets';
import { TEST_HENCHMEN_1 } from './henchmen';
import { TEST_HERO_1, TEST_HERO_2 } from './heroes';
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
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_PLAYER_PICKS_A_HERO_SCHEME = new SchemeDefinition({
  id: '468198e3-a55b-4b7c-900e-c83f4b3eb65b',
  name: 'Test player picks a hero scheme',
  setup:
    '6 twists. Each player chooses a Hero to be part of the Hero Deck. Randomly select other Heroes up to the normal number of Heroes. Each player adds to their starting deck three non-rare cards with different names from the Hero they chose and three Wounds.',
  twist: `1-5: Each player discards a non-grey Hero or gains a Wound.
6: Evil wins!`,
  evilWins: 'When 6 twists revealed',
  meta: {
    numTwists: 6,
    overrideScheme: {
      schemeType: PlayerPicksAHeroScheme,
    },
  },
  gameSet: TEST_GAME_SET_META_1,
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
  gameSet: TEST_GAME_SET_META_1,
});

export const TEST_REQUIRE_VILLAIN_AND_HERO_SCHEME = new SchemeDefinition({
  id: '5ff1f23e-28d5-41de-b2bb-b7f54c0ff5f5',
  name: 'Test Require Villain and Hero with backup in Villain Deck scheme',
  setup:
    '10 Twists. Include Hellfire Club as one of the Villain Groups. Add 14 Jean Grey Hero cards to the Villain Deck.',
  specialRules:
    'Jean Grey cards in the Villain Deck are Villains with attack equal to their cost, "Ambush : Play another Villain card" and "Fight : Gain this as a Hero."',
  twist: `Shuffle all Jean Grey cards from the KO pile and from all players' hands and discard piles into the Villain Deck.`,
  evilWins: 'When 5 Jean Grey cards have escaped.',
  meta: {
    numTwists: 10,
    rules: (rule) => {
      rule.villainDeck.numHeroes = 1;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireVillainAndHeroWithBackupInVillainDeckScheme,
      params: [TEST_VILLAIN_1, TEST_HERO_1, TEST_HERO_2],
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
      rule.heroDeck.numHeroes = 6;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCardName('Name'),
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
  name: 'Test Require Henchment in Additional Deck',
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
