import { SchemeDefinition } from '../../../model';

import { META } from './sw1.meta';

export const BUILD_AN_ARMY_OF_ANNIHILATION = new SchemeDefinition({
  id: '174cb194-92c5-467d-ba9f-d186e08f7f60',
  name: 'Build an Army of Annihilation',
  setup: '9 Twists. Put 10 extra Annihilation Wave Henchmen in that KO pile.',
  twist: `KO all Annihilation Henchmen from the players' Victory Piles. Stack this Twist next to the Scheme. Then, for each Twist in that stack, put an Annihilation Henchman from the KO pile next to the Mastermind. Players can fight those Henchmen.`,
  evilWins: 'When there are 10 Annihilation Henchmen next to the Mastermind.',
  meta: {
    numTwists: 9,
    rules: (rule) => {
      rule.additionalDeck.push({
        name: 'KO pile',
        deck: { numHenchmenGroups: 1 },
      });
      return rule;
    },
  },
  gameSet: META,
});

export const CORRUPT_THE_NEXT_GENERATION_OF_HEROES = new SchemeDefinition({
  id: '10b0c10f-803e-4e39-8156-ed0bee57a98f',
  name: 'Corrupt the Next Generation of Heroes',
  setup: '8 Twists. Add 10 Sidekicks to the Villain Deck.',
  twist: `Twists 1-7: Each player returns a Sidekick from their discard pile to the Sidekick Stack. Then, two Sidekicks from the Sidekick Stack enter the city.
Twist 8: All Sidekicks in the city escape.`,
  evilWins: 'When 4 Sidekicks escape.',
  specialRules:
    'Sidekicks in the Villain Deck and city are Villains. Their Attack is 2 plus the number of Twists stacked next to this Scheme. When you defeat a Sidekick, gain it to the top of your deck.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numSidekicks = 10;
      return rule;
    },
  },
  gameSet: META,
});

export const CRUSH_THEM_WITH_MY_BARE_HANDS = new SchemeDefinition({
  id: '32f2a224-1c19-4638-8642-ce2e60097672',
  name: 'Crush Them With My Bare Hands',
  setup: '5 Twists. If playing solo, add an extra Villain Group.',
  twist: `This Twist becomes a Master Strike that takes effect immediately.`,
  evilWins: 'When 8 Master Strikes have taken effect.',
  meta: {
    numTwists: 5,
    rules: (rule, num) => {
      if (num === 1) {
        rule.villainDeck.numVillainGroups++;
      }
      return rule;
    },
  },
  gameSet: META,
});

export const DARK_ALLIANCE = new SchemeDefinition({
  id: '9e11e876-2b5e-4883-8ab2-6ad1e0ad82b0',
  name: 'Dark Alliance',
  setup: '8 Twists.',
  twist: `Twist 1: Add a random second Mastermind to the game with one Mastermind Tactic.
Twist 2-4: If the second Mastermind is still in play, it gains another Mastermind Tactic.
Twist 5-6: Each Mastermind captures a Bystander.
Twist 7: Evil Wins!`,
  evilWins: 'When 7 twists revealed',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck.push({
        deck: {
          numMasterminds: 1,
        },
        name: 'Second Mastermind',
      });
      return rule;
    },
  },
  gameSet: META,
});

export const FRAGMENTED_REALITIES = new SchemeDefinition({
  id: '31bd38a5-848e-456a-aaed-18266f3ee5c2',
  name: 'Fragmented Realities',
  setup:
    "Add an extra Villain Group. Shuffle the Villain Deck, then split it as evenly as possible into a Villain Deck for each player. Then, shuffle 2 Twists into each player's Villain Deck.",
  twist: `Play two cards from your Villain Deck.`,
  evilWins:
    'When the number of non-grey Heroes in the KO pile is 5 times the number of players.',
  specialRules:
    'The normal city does not exist. Instead, each player has a different dimension in front of them with one city space. Villains and Bystanders from your Villain Deck enter your dimension. You can fight Villains in any dimension.',
  meta: {
    numTwists: {
      /* eslint-disable @typescript-eslint/naming-convention */
      '1': 2,
      '2': 4,
      '3': 6,
      '4': 8,
      '5': 10,
      /* eslint-enable @typescript-eslint/naming-convention */
    },
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
  gameSet: META,
});

export const MASTER_OF_TYRANTS = new SchemeDefinition({
  id: 'cf336e4c-9511-4fa9-bfca-49176c9b0124',
  name: 'Master of Tyrants',
  setup:
    '8 Twists. Choose 3 other Masterminds, and shuffle their 12 Tactics into the Villain Deck. Those Tactics are "Tyrant Villains" with their printed Attack and no abilities.',
  twist: `Twist 1-7: Put this Twist under a Tyrant Villain as "Dark Power." It gets +2 Attack.
Twist 8: All Tyrant Villains in the city escape.`,
  evilWins: 'When 5 Tyrant Villains escape.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numMasterminds = 3;
      return rule;
    },
  },
  gameSet: META,
});

export const PANDIMENSIONAL_PLAGUE = new SchemeDefinition({
  id: 'a4edcc4c-be8f-4eff-bdc5-54dcbaa3400d',
  name: 'Pan-Dimensional Plague',
  setup: '10 Twists.',
  twist: `KO all Wounds from next to the HQ. Then, put a Wound from the Wound Stack next to each Hero in the HQ.`,
  evilWins: 'When the Wound Stack runs out.',
  specialRules:
    'When a player recruits a Hero with a Wound next to it, that player can either gain that Wound or pay 1 Recruit to return that Wound to the Wound Stack.',
  meta: { numTwists: 10 },
  gameSet: META,
});

export const SMASH_TWO_DIMENSIONS_TOGETHER = new SchemeDefinition({
  id: 'b544db1e-4e14-41ff-b203-46094911d0fc',
  name: 'Smash Two Dimensions Together',
  setup:
    '8 Twists. Add an extra Villain Group. Put the Villain Deck on the Bank space.',
  twist: `Twist 1-7: Play two cards from the Villain Deck.
Twist 8: All Villains in both dimensions escape.`,
  evilWins: 'When 10 Villains escape.',
  specialRules:
    'The Sewers and Bank do not exist, so the city is only 3 spaces. There is a parallel dimension with 3 city spaces above the main city. Whenever a Villain enters the city, the current player chooses which city it enters.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.villainDeck.numVillainGroups++;
      return rule;
    },
  },
  gameSet: META,
});
