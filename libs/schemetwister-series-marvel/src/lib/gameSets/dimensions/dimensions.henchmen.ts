import { Henchmen } from '@schemetwister/libtwister';

import { META } from './dimensions.meta';

export const CIRCUS_OF_CRIME = new Henchmen({
  id: 'eb4cbb16-5216-4754-99d7-ee1bf2f314ee',
  name: 'Circus of Crime',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'Reveal the top card of your deck. If it costs 0 Cost, KO it. Otherwise, draw it.',
});

export const SPIDER_SLAYER = new Henchmen({
  id: 'b0002f19-3e6b-427a-965d-0fafcf09ee7d',
  name: 'Spider-Slayer',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'Reveal the top two cards of your deck. Put any that cost 2 Cost or less into your hand. Put the rest back in any order',
});
