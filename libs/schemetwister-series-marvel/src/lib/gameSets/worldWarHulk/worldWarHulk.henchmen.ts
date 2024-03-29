import { Henchmen } from '@schemetwister/libtwister';

import { FEAST } from '../paintTheTownRed/paintTheTownRed.keywords';

import { OUTWIT } from './worldWarHulk.keywords';
import { META } from './worldWarHulk.meta';

export const CYTOPLASM_SPIKES = new Henchmen({
  id: '72ad3b4c-0705-4ea3-9b5e-88b2efa36183',
  name: 'Cytoplasm Spikes',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'Feast. If Cytoplasm Spikes feasts on a non-grey Hero, you get +2 Recruit',
  keywords: [FEAST],
});

export const DEATHS_HEADS = new Henchmen({
  id: '82cb34b7-64f0-419a-8751-3d5eb9273659',
  name: "Death's Heads",
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    "If you Outwit these Death's Heads, KO one of your cards that costs 0.",
  keywords: [OUTWIT],
});

export const SAKAARAN_HIVELINGS = new Henchmen({
  id: '572260df-5a13-4726-b7a4-84135a419b0e',
  name: 'Sakaaran Hivelings',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight:
    'Look at the top card of your deck. Put it back on the top or bottom. Then Feast',
  keywords: [FEAST],
});
