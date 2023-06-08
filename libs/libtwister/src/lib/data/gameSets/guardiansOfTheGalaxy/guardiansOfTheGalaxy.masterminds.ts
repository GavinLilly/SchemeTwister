import { Mastermind } from '../../../model';

import { ARTIFACT, SHARDS } from './keywords';
import { META } from './meta';
import { INFINITY_GEMS, KREE_STARFORCE } from './guardiansOfTheGalaxy.villains';

export const SUPREME_INTELLIGENCE = new Mastermind({
  id: '4cc39f08-f904-433f-8345-abf183de331a',
  name: 'Supreme Intelligence of the Kree',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [KREE_STARFORCE],

  keywords: [SHARDS],
});

export const THANOS = new Mastermind({
  id: 'a70ec132-82aa-4a6c-bf26-f57928b3b066',
  name: 'Thanos',
  gameSet: META,
  attackPoints: 24,
  victoryPoints: 7,
  alwaysLeads: [INFINITY_GEMS],
  keywords: [ARTIFACT],
});
