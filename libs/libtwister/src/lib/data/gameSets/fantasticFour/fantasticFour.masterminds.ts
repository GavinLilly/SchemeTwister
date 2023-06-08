import { Mastermind } from '../../../model';

import { GALACTUS_COSMIC_THREAT } from './keywords';
import { META } from './meta';
import { HERALDS_OF_GALACTUS, SUBTERRANEA } from './fantasticFour.villains';

export const GALACTUS = new Mastermind({
  id: '9782d689-6f55-435e-a99f-0b91cf167fe9',
  name: 'Galactus',
  gameSet: META,
  attackPoints: 20,
  victoryPoints: 7,
  alwaysLeads: [HERALDS_OF_GALACTUS],
  keywords: [GALACTUS_COSMIC_THREAT],
});

export const MOLE_MAN = new Mastermind({
  id: 'd05d9daa-802c-46eb-93a9-812ea79fa203',
  name: 'Mole Man',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [SUBTERRANEA],
});
