import { EpicMastermindBuilder } from '../../../model';
import { THROWN_ARTIFACT } from '../fearItself/keywords';
import { ARTIFACT } from '../guardiansOfTheGalaxy/keywords';
import { CONQUEROR } from '../marvelStudios/keywords';

import { VILLAINOUS_WEAPONS } from './keywords';
import { META } from './meta';
import { DARK_COUNCIL, OMENS_OF_RAGNAROK } from './heroesOfAsgard.villains';

const malekith = new EpicMastermindBuilder({
  name: 'Malekith the Accursed',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [DARK_COUNCIL],
  keywords: [ARTIFACT, THROWN_ARTIFACT, VILLAINOUS_WEAPONS],
});

export const MALEKITH = malekith.buildNormal({
  id: '666bc5a4-f156-4b7e-b978-917f0f9ea888',
  attackPoints: 8,
});

export const EPIC_MALEKITH = malekith.buildEpic({
  id: '55ba618a-f935-4d75-ae83-5d78fa71e177',
  attackPoints: 10,
});

const hela = new EpicMastermindBuilder({
  name: 'Hela, Goddess of Death',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [OMENS_OF_RAGNAROK],
  keywords: [ARTIFACT, THROWN_ARTIFACT, CONQUEROR, VILLAINOUS_WEAPONS],
});

export const HELA = hela.buildNormal({
  id: '7e0e4ad1-34b6-41a1-939c-713ac0b1cc05',
  attackPoints: 10,
});

export const EPIC_HELA = hela.buildEpic({
  id: '91809fea-40ce-4238-ab2b-686bd76926b2',
  attackPoints: 12,
});
