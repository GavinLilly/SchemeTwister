import { Mastermind } from '@schemetwister/libtwister';
import { ARTIFACT } from '@schemetwister/schemetwister-series-marvel-common';

import { SHARDS } from './guardiansOfTheGalaxy.keywords';
import { META } from './guardiansOfTheGalaxy.meta';
import { INFINITY_GEMS, KREE_STARFORCE } from './guardiansOfTheGalaxy.villains';

export const SUPREME_INTELLIGENCE = new Mastermind({
  id: '4cc39f08-f904-433f-8345-abf183de331a',
  name: 'Supreme Intelligence of the Kree',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [KREE_STARFORCE],
  keywords: [SHARDS],
  masterStrike:
    'The Supreme Intelligence gains a Shard. Then each player reveals their hand and discards each with cost equal to, and cost one higher than, the number of Shards on the Supreme Intelligence.',
});

export const THANOS = new Mastermind({
  id: 'a70ec132-82aa-4a6c-bf26-f57928b3b066',
  name: 'Thanos',
  gameSet: META,
  attackPoints: 24,
  victoryPoints: 7,
  alwaysLeads: [INFINITY_GEMS],
  keywords: [ARTIFACT],
  specialRules:
    'Thanos gets -2 Attack for each Infinity Gem Artifact card controlled by any player.',
  masterStrike:
    'Each player reveals their hand and puts one of their non-grey Heroes next to Thanos in a "Bound Souls" pile.',
});
