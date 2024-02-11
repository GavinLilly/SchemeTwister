import { Henchmen } from '../../../model';
import { MICROSCOPIC_SIZE_CHANGING } from '../antMan/antMan.keywords';
import { CONQUEROR } from '../marvelStudios/marvelStudios.keywords';

import { EXPLORE } from './mcuAntMan.keywords';
import { META } from './mcuAntMan.meta';

// TODO allow for sub-henchmen cards
export const QUANTUMNAUTS = new Henchmen({
  id: '28edf602-7691-42f4-95b2-c9a86144e781',
  name: 'Quantumnauts',
  attackPoints: '2+, 3, 4*',
  victoryPoints: 1,
  gameSet: META,
  fight: 'Various clauses',
  keywords: [CONQUEROR, EXPLORE, MICROSCOPIC_SIZE_CHANGING],
});
