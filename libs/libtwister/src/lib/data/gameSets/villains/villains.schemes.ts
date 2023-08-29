import {
  SchemeDefinition,
  DECK_TYPE,
  RequireCardInDeckScheme,
  RequireCard,
  RequireHenchmen,
  RequireVillainGroup,
} from '../../../model';

import { COPS, SHIELD_ASSAULT_SQUAD } from './villains.henchmen';
import { META } from './villains.meta';
import { AVENGERS } from './villains.villains';

export const BUILD_AN_UNDERGROUND_MEGAVAULT_PRISON = new SchemeDefinition({
  id: 'ea05a9a1-39b0-4925-a85b-8b62b127d1e4',
  name: 'Build an Underground MegaVault Prison',
  setup: '8 Twists. The Bindings stack holds 5 Bindings per player.',
  twist: `If there is an Adversary in the Sewers, each player gains a Bindings. Otherwise, reveal the top card of the Adversary Deck. If that card is an Adversary, it enters the Sewers.`,
  evilWins: 'When the Bindings stack runs out.',
  meta: {
    numTwists: 8,
    rules: (rule, num) => {
      rule.numWounds = num * 5;
      return rule;
    },
  },
  gameSet: META,
});

export const CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS = new SchemeDefinition({
  id: '405c06f9-0366-4f42-95f4-00a9fd1aa6bf',
  name: 'Cage Villains in Power-Suppressing Cells',
  setup: '8 Twists. Stack 2 Cops per player next to this Plot.',
  twist: `Each player returns all Cops from their Victory Pile to the Cop Stack. Then each player puts a non-grey Ally from their hand in front of them. Put a Cop from the Cop Stack on top of each of those Allies.`,
  evilWins:
    'When a Twist must put out a Cop, but the Cop Stack is already empty.',
  specialRules:
    'You can fight any Cop on top of Allies. If you do, the player of your choice gains that Ally.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Cop stack',
        deck: {
          numHenchmenGroups: 1,
        },
      };
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(COPS),
        new RequireHenchmen(),
        DECK_TYPE.ADDITIONAL,
      ],
    },
  },
  gameSet: META,
});

export const CROWN_THOR_KING_OF_ASGARD = new SchemeDefinition({
  id: 'f4cfb0cd-420f-4822-9b8a-b5cc7d48e1e7',
  name: 'Crown Thor King of Asgard',
  setup: '8 Twists. Put the Thor Adversary next to this Plot.',
  twist: `If Thor is in the city, he overruns. Otherwise, Thor enters the Bridge from wherever he is, and Thor guards 3 Bystanders.`,
  evilWins: 'When there are 3 Triumphs of Asgard next to this Plot.',
  specialRules:
    'Whenever Thor overruns, stack a Plot Twist from the KO pile next to this Plot as a "Triumph of Asgard."',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Thor',
        deck: {
          numHenchmenGroups: 1,
        },
      };
      return rule;
    },
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(AVENGERS),
        new RequireVillainGroup(),
        DECK_TYPE.ADDITIONAL,
      ],
    },
  },
  gameSet: META,
});

export const CRUSH_HYDRA = new SchemeDefinition({
  id: '6a2e33fd-c05d-4193-a9a4-9f405a9587b9',
  name: 'Crush HYDRA',
  setup: '8 Twists.',
  twist: `Twists 1-7: Each Adversary in the city captures a New Recruit, or if there are no more New Recruits, a Madame HYDRA.
Twist 8: Put all captured Allies from the city into the Overrun Pile.`,
  evilWins: 'When there are 11 Allies in the Overrun Pile.',
  specialRules:
    'An Adversary gets +1 Attack for each Ally it has captured. When you fight that Adversary, gain those Allies.',
  meta: { numTwists: 8 },
  gameSet: META,
});

export const GRADUATION_AT_XAVIERS_XACADEMY = new SchemeDefinition({
  id: '7a3f81cd-79b7-42b0-a794-f2a28dedfb87',
  name: "Graduation at Xavier's X-Academy",
  setup: '8 Twists. Stack 8 Bystanders next to this Plot as "Young Mutants."',
  twist: `Put a Bystander from next to this Plot into the Overrun Pile.`,
  evilWins: 'When there are 8 Bystanders in the Overrun Pile.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Young Mutants',
        deck: {
          numBystanders: 8,
        },
      };
      return rule;
    },
  },
  gameSet: META,
});

export const INFILTRATE_THE_LAIR_WITH_SPIES = new SchemeDefinition({
  id: 'fa017075-b03f-4767-802b-7f1de180fc99',
  name: 'Infiltrate the Lair with Spies',
  setup:
    '8 Twists, Stack 21 Bystanders next to this Plot as "Infiltrating Spies."',
  twist: `Put all Bystanders from the Lair into the Overrun pile. Then put a Bystander from next to this Plot into each Lair space under the Bridge, Streets, and Sewers.`,
  evilWins: 'When there are 12 Bystanders in the Overrun Pile.',
  specialRules:
    'When you recruit an Ally, kidnap any Bystander in that Lair space. When an Ally leaves the Lair in any other way, put any Bystander from that Lair space into the Overrun Pile.',
  meta: {
    numTwists: 8,
    rules: (rule) => {
      rule.additionalDeck = {
        name: 'Infiltrating Spies',
        deck: {
          numBystanders: 21,
        },
      };
      return rule;
    },
  },
  gameSet: META,
});

export const MASS_PRODUCE_WAR_MACHINE_ARMOR = new SchemeDefinition({
  id: '60e91be1-e1de-4ad7-bb32-61a28ebfec1b',
  name: 'Mass Produce War Machine Armor',
  setup:
    '8 Twists, Include 10 S.H.I.E.L.D. Assault Squads as one of the Backup Adversary groups.',
  twist: `Stack this Twist next to the Plot as "War Machine Technology." An Assault Squad from the current player's Victory Pile enters the Bridge.`,
  evilWins: 'When there are 3 Assault Squads in the Overrun Pile.',
  specialRules:
    'Assault Squads get +1 Attack for each War Machine Technology next to the Plot.',
  meta: {
    numTwists: 8,
    overrideScheme: {
      schemeType: RequireCardInDeckScheme,
      params: [
        new RequireCard(SHIELD_ASSAULT_SQUAD),
        new RequireHenchmen(),
        DECK_TYPE.VILLAIN,
      ],
    },
  },
  gameSet: META,
});

export const RESURRECT_HEROES_WITH_NORN_STONES = new SchemeDefinition({
  id: 'd673d8f2-c240-4e6b-aebb-df32af35045f',
  name: 'Resurrect Heroes with Norn Stones',
  setup: '8 Twists.',
  twist: `Twists 1-6: An Adversary from the current player's Victory Pile enters the Bridge. Then play the top card of the Adversary Deck.
Twists 7-8: Each player puts an Adversary from their Victory Pile into the Overrun Pile.`,
  evilWins: 'When there are 3 Adversaries per player in the Overrun Pile.',
  meta: { numTwists: 8 },
  gameSet: META,
});
