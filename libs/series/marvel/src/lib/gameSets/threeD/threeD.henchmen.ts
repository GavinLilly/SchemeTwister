import { Henchmen } from '@schemetwister/libtwister';

import { META } from './threeD.meta';

export const CIRCUS_OF_CRIME = new Henchmen({
  id: '00a88791-99e4-4247-a373-8bf92baa0ba0',
  name: 'Circus of Crime',
  attackPoints: 3,
  victoryPoints: 1,

  fight:
    'Reveal the top card of your deck. If it costs 0, KO it. Otherwise, draw it.',
  gameSet: META,
});

export const SPIDER_SLAYER = new Henchmen({
  id: '6cf7d59f-dc70-4c13-a438-f092b3fb7bf1',
  name: 'Spider Slayer',
  attackPoints: 3,
  victoryPoints: 1,

  fight:
    'Reveal the top two cards of your deck. Put any that cost 2 or less into your hand. Put the rest back in any order.',
  gameSet: META,
});
