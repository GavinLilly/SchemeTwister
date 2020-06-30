export const Schemes = [
  {
    id: 'b9171c60-c3c3-4482-91e5-38ba1d2b3a6a',
    name: 'The Legacy Virus',
    twist: 'Each player reveals a Tech Hero or gains a Wound.',
    evilWins: 'If the Wound stack runs out.',
  },
  {
    id: '7d06db7a-d3d0-48fe-be7a-dbe6a273ad03',
    name: 'Midtown Bank Robbery',
    twist:
      'Any Villain in the Bank captures 2 Bystanders. Then play the top card of the Villain Deck.',
    evilWins: 'When 8 Bystanders are carried away by escaping Villains.',
    numBystandersInVillainDeck: 12,
    specialRules: 'Each Villain gets +1 Attack for each Bystander it has.',
  },
  {
    id: '7ad1b3ed-efd8-4b2a-bd6a-ca500fc0f1af',
    name: 'Negative Zone Prison Breakout',
    twist: 'Play the top 2 cards of the Villain Deck.',
    evilWins: 'If 12 Villains escape.',
    rules: {
      numHenchmen: {
        2: 2,
        3: 2,
        4: 3,
        5: 3,
      },
    },
  },
  {
    id: '9fd584fc-f6d5-4027-9a86-b1a2e11408de',
    name: 'Portals to the Dark Dimension',
    twist:
      '1: Put the Dark Portal above the Mastermind. The Mastermind gets +1 Attack.\n2: Put the Dark Portal in the leftmost city space that doesn"t yet have a Dark Portal. Villains in that city space get +1 Attack.',
    evilWins: 'If 7 twists are revealed',
    rules: {
      numTwists: {
        2: 7,
        3: 7,
        4: 7,
        5: 7,
      },
    },
    specialRules: 'Each Twist is a Dark Portal.',
  },
  {
    id: '34543e98-d863-4395-a1ec-c6a190b2fb08',
    name: "Replace Earth's Leaders with Killbots",
    twist: 'Put the Twist next to this Scheme.',
    evilWins: 'If 5 "Killbots" escape.',
    rules: {
      numTwists: {
        2: 5,
        3: 5,
        4: 5,
        5: 5,
      },
    },
    numBystandersInVillainDeck: 18,
    setupDescription: '3 additional twists next to the scheme card',
    specialRules:
      'Bystanders in the Villain Deck count as Killbot Villains, with Attack equal to the number of Twists next to this Scheme.',
  },
  {
    id: '81a8b233-aa28-4258-833e-4cd9fe5d051a',
    name: 'Secret Invasion of the Skrull Shapeshifters',
    twist:
      'The highest-cost Hero from the HQ moves into the Sewers as a Skrull Villain, as above.',
    evilWins: 'If 6 Heroes get into the Escaped Villains pile.',
    rules: {
      numHeroes: {
        2: 6,
        3: 6,
        4: 6,
        5: 6,
      },
    },
    requiredVillainsID: 'a3ee145c-54a6-4f76-8593-423a0a3360f0',
    setupDescription:
      'Shuffle 12 random Heroes from the Hero Deck into the Villain Deck.',
    specialRules:
      "Heroes in the Villain Deck count as Skrull Villains with Attack equal to the Hero's Cost +2. If you defeat that Hero, you gain it.",
  },
  {
    id: '8d8eb57c-ec8a-402c-b0de-8afd8805f00f',
    name: 'Super Hero Civil War',
    twist: 'KO all the Heroes in the HQ.',
    evilWins: 'If the Hero Deck runs out.',
    rules: {
      numTwists: {
        2: 8,
        3: 8,
        4: 5,
        5: 5,
      },
      numHeroes: {
        2: 4,
        3: 5,
        4: 5,
        5: 6,
      },
    },
  },
  {
    id: '6fc89682-eb0f-45b4-88c7-5f0e3dc8fcc0',
    name: 'Unleash the Power of the Cosmic Cube',
    twist:
      '1-4: Put the Twist next to the Scheme.\n5-6: Each player gains a Wound.\n7: Each player gains 3 Wounds.',
    evilWins: 'If 8 twists are revealed',
  },
];
