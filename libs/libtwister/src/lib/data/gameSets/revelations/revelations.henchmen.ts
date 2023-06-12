import { Henchmen } from '../../../model';

import { LOCATIONS } from './revelations.keywords';
import { META } from './revelations.meta';

export const HYDRA_BASE = new Henchmen({
  id: 'b6e568bb-cefb-45ed-9c3b-b18026b7d305',
  name: 'HYDRA Base',
  attackPoints: '2+',
  victoryPoints: 1,

  gameSet: META,
  fight: 'KO one of your Heroes.',
  keywords: [LOCATIONS],
});

export const MANDARINS_RINGS = new Henchmen({
  id: '225028da-e992-4073-84ae-2fd3853d1eac',
  name: "Mandarin's Rings",
  attackPoints: '3',
  victoryPoints: 1,

  gameSet: META,
  fight: 'Draw a card.',
});
