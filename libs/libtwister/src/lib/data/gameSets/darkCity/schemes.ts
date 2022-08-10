import {
  RequireHenchmenInVillainDeckScheme,
  RequireHeroInVillainDeckScheme,
} from '../../../model';
import { NewScheme } from '../../../model/interfaces';
import { HeroClass } from '../../enums';

import { MAGGIA_GOONS } from './henchmen';
import { JEAN_GREY } from './heroes';

export const CAPTURE_BABY_HOPE: NewScheme = {
  id: 'd4d841c0-5e46-4307-9436-39482fa5627b',
  name: 'Capture Baby Hope',
  setup:
    '8 Twists. Put a token on this Scheme to represent the baby, Hope Summers.',
  twist:
    'If a Villain has the baby, that Villain escapes. Otherwise, the baby is captured by the closest Villain to the Villain Deck. (If there are no Villains, do nothing.)',
  specialRules:
    'The Villain with the baby gets +4 Attack. If you defeat that Villain, rescue the baby to your Victory Pile (until the next Twist). The baby is worth 6 VP at the end of the game. If a Villain escapes with the baby, stack a Twist next to the Mastermind and return the baby to this Scheme card.',
  evilWins: 'When there are 3 Twists stacked next to the Mastermind.',
  meta: { numTwists: 8 },
};

export const DETONATE_THE_HELICARRIER: NewScheme = {
  id: 'afe0c1bf-e25e-4321-9e60-6a864099ab32',
  name: 'Detonate the Helicarrier',
  setup: '8 Twists. 6 Heroes in the Hero Deck.',
  specialRules:
    "Whenever a Hero is KO'd from the HQ, turn that Hero face down on that HQ space, representing an Explosion on the Helicarrier. When an HQ space has 6 Explosions, that space is Destroyed and can't hold Heroes anymore.",
  twist:
    'Stack this Twist next to the Scheme. Then for each Twist in that stack, KO the leftmost Hero in the HQ and immediately refill that space.',
  evilWins: 'When all HQ spaces are Destroyed or the Hero Deck runs out.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.heroDeck.numHeroes = 6;
      return rule;
    },
  },
};

export const MASSIVE_EARTHQUAKE_GENERATOR: NewScheme = {
  id: 'b5e7e6b9-d71e-4b97-9709-f34d4fb2a462',
  name: 'Massive Earthquake Generator',
  setup: '8 Twists.',
  twist: `Each player reveals a ${HeroClass.STRENGTH} Hero or KOs the top card of their deck.`,
  evilWins:
    'When the number of non grey Heroes in the KO pile is 3 times the number of players.',
  meta: { numTwists: 8 },
};

export const ORGANIZED_CRIME_WAVE: NewScheme = {
  id: 'c2a36b60-4a97-4e3d-9f7b-4a14750c1d24',
  name: 'Organized Crime Wave',
  setup: '8 Twists. Include 10 Maggia Goons as one of the Henchman Groups.',
  specialRules:
    'Goons also have the ability "Ambush: Play another card from the Villain Deck."',
  twist:
    "Each Goon in the city escapes. Shuffle all Goons from each players' Victory Piles into the Villain Deck.",
  evilWins: 'When 5 Goons escape.',
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireHenchmenInVillainDeckScheme,
      params: [MAGGIA_GOONS],
    },
  },
};

export const SAVE_HUMANITY: NewScheme = {
  id: '48b8e045-c061-4e3a-877b-36e72f6b71ef',
  name: 'Save Humanity',
  setup:
    '8 Twists. 24 Bystanders in the Hero Deck. (1 player: 12 Bystanders in the Hero Deck)',
  specialRules: 'You may spend 2 Recruit to rescue a Bystander from the HQ.',
  twist: `KO all Bystanders in the HQ. Then each player reveals an ${HeroClass.INSTINCT} Hero or KOs a Bystander from their Victory Pile.`,
  evilWins:
    "When the number of Bystanders KO'd and/or carried off is 4 times the number of players.",
  meta: {
    numTwists: 8,
    rules: (rule, num) => {
      rule.heroDeck.numBystanders = 24;
      if (num === 1) {
        rule.heroDeck.numBystanders = 12;
      }
      return rule;
    },
  },
};

export const STEAL_THE_WEAPONIZED_PLUTONIUM: NewScheme = {
  id: '5c53d6e4-2b84-4fc1-81bc-750da3f899c7',
  name: 'Steal the Weaponized Plutonium',
  setup: '8 Twists representing Plutonium. Add an extra Villain Group.',
  twist:
    'This Plutonium is captured by the closest Villain to the Villain Deck. If there are no Villains in the city, KO this Plutonium. Either way, play another card from the Villain Deck.',
  specialRules:
    'Each Villain gets +1 Attack for each Plutonium it has. When a Villain with any Plutonium is defeated, shuffle that Plutonium back into the Villain Deck.',
  evilWins: 'When 4 Plutonium have been carried off by Villains.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
};

export const TRANSFORM_CITIZENS_INTO_DEMONS: NewScheme = {
  id: '2b991381-f7fe-44a4-adb5-99d10f936bb6',
  name: 'Transform Citizens Into Demons',
  setup:
    '8 Twists. Villain Deck includes 14 extra Jean Grey cards and no Bystanders.',
  twist:
    'Stack 5 Bystanders face down next to the Scheme. Bystanders stacked here are "Demon Goblin" Villains. They have 2 Attack. Players can fight these Demon Goblins to rescue them as Bystanders.',
  specialRules: `Each Jean Grey card counts as a "Goblin Queen" Villain. It's worth 4 VP. It has Attack equal to its Cost plus the number of Demon Goblins stacked next to the Scheme.`,
  evilWins: 'When 4 Goblin Queen cards escape.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numHeroes = 1;
      rule.villainDeck.numBystanders = undefined;
      return rule;
    },
    overrideScheme: {
      schemeType: RequireHeroInVillainDeckScheme,
      params: [JEAN_GREY],
    },
  },
};

export const XCUTIONERS_SONG: NewScheme = {
  id: '05f48d7a-aa59-46af-b0e4-6e8b54395c70',
  name: "X-Cutioner's Song",
  setup:
    '8 Twists. Villain Deck includes 14 cards for an extra Hero and no Bystanders.',
  specialRules:
    'Whenever you play a Hero from the Villain Deck, that Hero is captured by the closest enemy to the Villain Deck. Each Villain gets +2 Attack for each Hero it has. When you fight an enemy, gain all the Heroes captured by that enemy.',
  twist:
    'KO all Heroes captured by enemies. Then play another card from the Villain Deck.',
  evilWins: "9 non grey Heroes are KO'd or carried off.",
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numHeroes = 1;
      rule.villainDeck.numBystanders = undefined;
      return rule;
    },
  },
};
