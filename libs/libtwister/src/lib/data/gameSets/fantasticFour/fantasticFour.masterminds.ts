import { Mastermind } from '../../../model';

import { GALACTUS_COSMIC_THREAT } from './fantasticFour.keywords';
import { META } from './fantasticFour.meta';
import { HERALDS_OF_GALACTUS, SUBTERRANEA } from './fantasticFour.villains';

export const GALACTUS = new Mastermind({
  id: '9782d689-6f55-435e-a99f-0b91cf167fe9',
  name: 'Galactus',
  gameSet: META,
  attackPoints: 20,
  victoryPoints: 7,
  alwaysLeads: [HERALDS_OF_GALACTUS],
  keywords: [GALACTUS_COSMIC_THREAT],
  mastermindWins: 'When the city is destroyed.',
  masterStrike:
    'Destroy the city space closest to Galactus. Any Villain there escapes. Put this Master Strike there.',
});

export const MOLE_MAN = new Mastermind({
  id: 'd05d9daa-802c-46eb-93a9-812ea79fa203',
  name: 'Mole Man',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 6,
  alwaysLeads: [SUBTERRANEA],
  masterStrike:
    'All Subterranea Villains in the city escape. If any Villains escaped this way, each player gains a Wound.',
});
