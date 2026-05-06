import {
  DECK_TYPE,
  RequireCard,
  RequireCardInDeckScheme,
  RequireHenchmen,
  RequireHero,
  SchemeDefinition,
} from '@schemetwister/libtwister';

import { TUROK_HAN_VAMPIRES } from './buffyTheVampireSlayer.henchmen';
import {
  ANGEL,
  FAITH_LEHANE,
  SPIKE,
  WILLOW_ROSENBERG,
} from './buffyTheVampireSlayer.heroes';
import { META } from './buffyTheVampireSlayer.meta';

export const HELLMOUTH_OPENING = new SchemeDefinition({
  id: '9d0b0dd2-5c9b-4a3a-a5d0-369e0648ddb5',
  name: 'Hellmouth Opening',
  setup: 'Include 8 Scheme Twists',
  twist:
    "Advance the Dark twice. If this triggers the Big Bad's Dark ability, place this Scheme Twist under the Big Bad",
  evilWins: 'When there are 3 Scheme Twists under the Big Bad',
  gameSet: META,
  meta: {
    numTwists: 8,
  },
});

export const EPIC_STRUGGLE = new SchemeDefinition({
  id: '598ac85b-70dc-492b-bd6f-82a6e5ec678c',
  name: 'Epic Struggle',
  setup: 'Include 8 Scheme Twists',
  specialRules: 'The Big Bad gets +Attack equal to the Dark',
  twist:
    'If it is Dark, set this Scheme Twist next to the Dark and set the Light to 1. If it is Light, set this Scheme Twist next to the Light and set the Dark to 3',
  evilWins: 'When there are 4 Scheme Twists next to the Dark',
  gameSet: META,
  meta: {
    numTwists: 8,
  },
});

export const TWILIGHT_TERROR = new SchemeDefinition({
  id: '613daef4-c187-4627-bad2-33ce93612501',
  name: 'Twilight Terror',
  setup:
    'Include 8 Scheme Twists. Include 4 Courage Tokens per player in the supply',
  specialRules:
    'When players gain a Courage Token it is taken from the supply. When players spend a Courage Token, it is returned to the supply',
  twist:
    'If no player has a Courage Token, set this Scheme Twist next to the Scheme. Each player KOs a Courage Token',
  evilWins: 'When there are three Scheme Twists next to the Scheme',
  gameSet: META,
  meta: {
    numTwists: 8,
    numCourageTokens: {
      /* eslint-disable @typescript-eslint/naming-convention */
      1: 4,
      2: 8,
      3: 12,
      4: 16,
      5: 20,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
  },
});

export const ROAD_TO_DAMNATION = new SchemeDefinition({
  id: '5ffdd5f3-ec0c-4e21-b0f3-acdbf11318ec',
  name: 'Road to Damnation',
  setup:
    'Include 8 Scheme Twists. Include one less Villain group in the Villain Deck. Choose one of the following: Angel, Faith, Spike, or Willow. Include the chosen Hero cards in the Villain Deck',
  specialRules:
    'When a Hero card is drawn from the Villain Deck, it is considered a Villain with Attack equal to its Cost plus the level of the Dark. When you fight a Hero, gain it',
  twist: 'All Heroes in Sunnydale escape. Play a card from the Villain Deck',
  evilWins: 'When five of the chosen Hero cards have Escaped',
  gameSet: META,
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups--;
      rule.villainDeck.numHeroes = 1;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(ANGEL, 1, false, FAITH_LEHANE, SPIKE, WILLOW_ROSENBERG),
        new RequireHero(),
        DECK_TYPE.villain,
      ],
    },
  },
});

export const CONVERT_TO_EVIL = new SchemeDefinition({
  id: '258eb6e8-6fa5-45ea-b4a1-dd0a4947a322',
  name: 'Convert to Evil',
  setup:
    'Include 8 Scheme Twists. Include 14 cards from an extra Hero and no Bystanders',
  specialRules:
    'Whenever you play a Hero from the Villain Deck, that Hero is captured by the Villain closest to the Villain Deck. Each Villain gets +2 Attack for each Hero it has captured. When you fight a Villain, gain all Heroes that it has captured',
  twist: 'Move each captured Hero to the KO pile. Advance the Dark',
  evilWins: 'When there are 12 non-grey Heroes in the KO pile',
  gameSet: META,
  meta: {
    numTwists: 8,
    rules: (rules) => {
      rules.heroDeck.numHeroes++;
      rules.villainDeck.numBystanders = 0;

      return rules;
    },
  },
});

export const DARKNESS_FALLS = new SchemeDefinition({
  id: '407ffe0b-dc7f-41fa-91fe-359794132714',
  name: 'Darkness Falls',
  setup: 'Include 8 Scheme Twists',
  twist: 'Trigger the Dark effect on the Big Bad',
  evilWins: 'When there are 7 Scheme Twists in the KO Pile',
  gameSet: META,
  meta: {
    numTwists: 8,
  },
});

export const SUMMON_THE_UBER_VAMPS = new SchemeDefinition({
  id: 'c56b269b-0cad-4d19-8892-f2ff7af6db46',
  name: 'Summon the Uber Vamps',
  setup:
    'Include 8 Scheme Twists. Include Turok-Han Vampire as a Henchman Group',
  twist:
    'Each player adds a Turok-Han Vampire from their Victory Pile to Sunnydale',
  evilWins: 'If there are five Turok-Han Vampires in the Escaped Villains Pile',
  gameSet: META,
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(TUROK_HAN_VAMPIRES),
        new RequireHenchmen(),
        DECK_TYPE.villain,
      ],
    },
  },
});

export const VILE_AGENDA = new SchemeDefinition({
  id: '91fb0bc4-49e5-431c-9d2f-baf03ee9f796',
  name: 'Vile Agenda',
  setup: 'Include 8 Scheme Twists',
  specialRules:
    'Heroes in the Library with Courage Tokens on them cost one more to recruit. When you recruit/gain a Hero with a Courage Token on it, gain that Courage Token. If a Hero with a Courage Token leaves the Library any other way, discard that Courage Token',
  twist:
    'KO all Heroes in the Library with a Courage Token on them. Add a Courage Token to each Hero in the Library',
  evilWins: 'When there are 12 non-grey Heroes in the KO pile',
  gameSet: META,
  meta: {
    numTwists: 8,
  },
});
