import { Scheme } from 'src/app/cards/models';
import * as Villains from './villains';
import { Setup } from 'src/app/cards/models';

type Twist = Map<number, string>;

// The Legacy Virus
export const theLegacyVirus: Scheme = new Scheme({
  name: 'The Legacy Virus',
  twist: new Map([[0, 'Each player reveals a Tech Hero or gains a Wound.']]),
  evilWins: 'If the Wound stack runs out.',
});

// Midtown Bank Robbery
export const midtownBankRobbery: Scheme = new Scheme({
  name: 'Midtown Bank Robbery',
  twist: new Map([
    [
      0,
      'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
    ],
  ]),
  evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
  setup: new Setup({
    numBystandersInVillainDeck: 12,
  }),
  specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
});

// Negative Zone Prison Breakout
export const negativeZonePrisonBreakout: Scheme = new Scheme({
  name: 'Negative Zone Prison Breakout',
  twist: new Map([[0, 'Play the top 2 cards of the Villain Deck.']]),
  evilWins: 'If 12 Villains escape.',
  setup: new Setup({
    numHenchmen: {
      2: 2,
      3: 2,
      4: 3,
      5: 3,
    },
  }),
});

// Portals to the Dark Dimension
export const portalsToTheDarkDimension: Scheme = new Scheme({
  name: 'Portals to the Dark Dimension',
  twist: new Map([
    [
      1,
      'Put the Dark Portal above the Mastermind. The Mastermind gets +1 Attack.',
    ],
    [
      2,
      "Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 Attack.",
    ],
    [
      3,
      "Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 Attack.",
    ],
    [
      4,
      "Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 Attack.",
    ],
    [
      5,
      "Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 Attack.",
    ],
    [
      6,
      "Put the Dark Portal in the leftmost city space that doesn't yet have a Dark Portal. Villains in that city space get +1 Attack.",
    ],
  ]),
  evilWins: 'If 7 twists are revealed',
  setup: new Setup({
    numTwists: {
      2: 7,
      3: 7,
      4: 7,
      5: 7,
    },
    setupDescription: 'Each Twist is a Dark Portal.',
  }),
});

// Replace Earth's Leaders with Killbots
export const replaceEarthsLeadersWithKillbots: Scheme = new Scheme({
  name: "Replace Earth's Leaders with Killbots",
  twist: new Map([[0, 'Put the Twist next to this Scheme.']]),
  evilWins: 'If 5 "Killbots" escape.',
  setup: new Setup({
    numTwists: {
      2: 5,
      3: 5,
      4: 5,
      5: 5,
    },
    numBystandersInVillainDeck: 18,
    setupDescription: '3 additional twists next to the scheme card',
  }),
  specialRules:
    'Bystanders in the Villain Deck count as Killbot Villains, with Attack equal to the number of Twists next to this Scheme.',
});

// Secret Invasion of the Skrull Shapeshifters
export const secretInvasionOfTheSkrullShapeshifters: Scheme = new Scheme({
  name: 'Secret Invasion of the Skrull Shapeshifters',
  twist: new Map([
    [
      0,
      'The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.',
    ],
  ]),
  evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
  setup: new Setup({
    numHeroes: {
      2: 6,
      3: 6,
      4: 6,
      5: 6,
    },
    requiredVillains: [Villains.skrulls],
    setupDescription:
      'Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
  }),
  specialRules:
    "Heroes in the Villain Deck count as Skrull Villains with Attack equal to the Hero's Cost +2. If you defeat that Hero, you gain it.",
});

export const superHeroCivilWar: Scheme = new Scheme({
  name: 'Super Hero Civil War',
  twist: new Map([[0, 'KO all the Heroes in the HQ.']]),
  evilWins: 'If the Hero Deck runs out.',
  setup: new Setup({
    numTwists: {
      2: 8,
      3: 8,
      4: 5,
      5: 5
    },
    numHeroes: {
      2: 4,
      3: 5,
      4: 5,
      5: 6
    }
  })
})

export const unleashThePowerOfTheCosmicCube: Scheme = new Scheme({
  name: 'Unleash the Power of the Cosmic Cube',
  twist: new Map([
    [1, 'Put the Twist next to the Scheme.'],
    [2, 'Put the Twist next to the Scheme.'],
    [3, 'Put the Twist next to the Scheme.'],
    [4, 'Put the Twist next to the Scheme.'],
    [5, 'Each player gains a Wound.'],
    [6, 'Each player gains a Wound.'],
    [7, 'Each player gains 3 Wounds.']
  ]),
  evilWins: 'If 8 twists are revealed'
})
