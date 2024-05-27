import { Mastermind } from '@schemetwister/libtwister';

import { META } from './buffyTheVampireSlayer.meta';
import {
  GLORYS_MINIONS,
  ORDER_OF_AURELIUS,
  THE_FIRSTS_MINIONS,
  THE_MAYORS_MINIONS,
  THE_SCOURGE_OF_EUROPE,
} from './buffyTheVampireSlayer.villains';

export const THE_MAYOR = new Mastermind({
  id: 'c8d36aa6-62b8-4acd-95a2-46eb08afa151',
  name: 'The Mayor',
  alwaysLeads: [THE_MAYORS_MINIONS],
  attackPoints: '8+',
  victoryPoints: 5,
  masterStrike:
    'Place this card next to the Mayor. Each player places a card from their hand on top of their deck for each Master Strike next to the Mayor.',
  dark: 'Each player KOs a grey card in their hand or gains a Wound.',
  specialRules: 'Has +1 Attack for each Master Strike next to the Mayor.',
  gameSet: META,
});

export const THE_MASTER = new Mastermind({
  id: 'b114e235-3b39-46f1-b9ef-58f53aa32c51',
  name: 'The Master',
  alwaysLeads: [ORDER_OF_AURELIUS],
  attackPoints: '7+',
  victoryPoints: 4,
  masterStrike:
    'Set the Dark to 3. Each player discards a random card for each Master Strike that has been played.',
  dark: 'Play a Villain from the Villain Deck.',
  specialRules: 'Has +Attack equal to the Dark.',
  gameSet: META,
});

export const GLORIFICUS = new Mastermind({
  id: '28678b9d-5a7f-41a9-adad-339f580ee2f6',
  name: 'Glorificus',
  alwaysLeads: [GLORYS_MINIONS],
  attackPoints: '8+',
  victoryPoints: 4,
  masterStrike:
    'Glorificus captures a Bystander. Each player chooses a Bystander in their Victory Pile. Glorificus captures those Bystanders.',
  dark: 'Glorificus captures a Bystander.',
  specialRules:
    'Glorificus has +1 Attack for each Bystander she has captured. Bystanders captured by Glorificus have no abilities when rescued.',
  gameSet: META,
});

export const THE_FIRST = new Mastermind({
  id: '3e1fa292-9cf2-4df2-8791-8523408d7bf1',
  name: 'The First',
  alwaysLeads: [THE_FIRSTS_MINIONS],
  attackPoints: 12,
  victoryPoints: 5,
  masterStrike:
    'Destroy the Library space closest to The First. KO any Hero there. Place this Master Strike there. when there are five Master Strikes in the Library, Evil Wins.',
  mastermindWins: 'When there are five Master Strikes in the Library.',
  dark: 'Reveal the top three cards of the Villain Deck. Play any Master Strikes revealed this way. Shuffle the other cards and place them on the bottom of the Villain Deck.',
  gameSet: META,
});

export const ANGELUS = new Mastermind({
  id: '7c426513-9d40-434c-8e50-d7516998ec99',
  name: 'Angelus',
  alwaysLeads: [THE_SCOURGE_OF_EUROPE],
  attackPoints: 9,
  victoryPoints: 5,
  masterStrike:
    'Advance the Dark. Each player discards a Slayer Hero or gains a Wound.',
  dark: 'Each player gains a Wound and places it on top of their deck.',
  specialRules:
    'You cannot fight Angelus while you have a Wound in your discard pile.',
  gameSet: META,
});
