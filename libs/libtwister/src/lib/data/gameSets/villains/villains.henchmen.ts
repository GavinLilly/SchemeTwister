import { Henchmen } from '../../../model';

import { META } from './villains.meta';

export const ASGARDIAN_WARRIORS = new Henchmen({
  id: '2d0c4ee2-1f2e-42f6-9b8b-4d7a8c7c8da9',
  name: 'Asgardian Warriors',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight: 'Draw a card.',
});

export const COPS = new Henchmen({
  id: 'a606e720-9132-432a-81bb-92d405246227',
  name: 'Cops',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight: 'Gain a New Recruit.',
});

export const MULTIPLE_MAN = new Henchmen({
  id: '7bf0e165-150e-4c79-9221-f56d20bfebd3',
  name: 'Multiple Man',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'KO one of your Allies for each other Multiple Man in your Victory Pile.',
});

export const SHIELD_ASSAULT_SQUAD = new Henchmen({
  id: '1893329f-efda-4407-988b-a2637a5bb99f',
  name: 'S.H.I.E.L.D. Assault Squad',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'Discard the top card of your deck. Then KO an Ally from your discard pile.',
});
