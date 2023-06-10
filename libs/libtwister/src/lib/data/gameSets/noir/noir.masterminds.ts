import { Mastermind } from '../../../model';

import { HIDDEN_WITNESS, INVESTIGATE } from './noir.keywords';
import { META } from './noir.meta';
import { GOBLINS_FREAK_SHOW, XMEN_NOIR } from './noir.villains';

export const CHARLES_XAVIER_PROFESSOR_OF_CRIME = new Mastermind({
  id: 'c31d1352-17f4-4389-82ca-d94c70409966',
  name: 'Charles Xavier, Professor of Crime',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [XMEN_NOIR],
  keywords: [INVESTIGATE, HIDDEN_WITNESS],
});

export const THE_GOBLIN_UNDERWORLD_BOSS = new Mastermind({
  id: 'ae4c557a-4523-4eb7-906b-4635e567b10c',
  name: 'The Goblin, Underworld Boss',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [GOBLINS_FREAK_SHOW],
  keywords: [INVESTIGATE, HIDDEN_WITNESS],
});
