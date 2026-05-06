import { Henchmen } from '@schemetwister/libtwister';

import { SHIELD_CLEARANCE } from './civilWar.keywords';
import { META } from './civilWar.meta';

export const MANDROID = new Henchmen({
  id: 'cdda62f3-711b-43ec-a30f-1a6d68739298',
  name: 'Mandroid',
  attackPoints: '2+',
  victoryPoints: 1,

  gameSet: META,
  fight: 'KO one of your Heroes.',
});

export const CAPE_KILLERS = new Henchmen({
  id: '7f0e7c78-884d-494d-9b66-9e0b0323d942',
  name: 'Cape-Killers',
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight: 'KO a card from your discard pile.',
  keywords: [SHIELD_CLEARANCE],
});
