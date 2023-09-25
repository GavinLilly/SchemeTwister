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
  specialRules:
    'Charles Xavier gets +1 Attack for each Bystander in the HQ and city.',
  masterStrike: 'Four Heroes in the HQ capture Hidden Witnesses.',
});

export const THE_GOBLIN_UNDERWORLD_BOSS = new Mastermind({
  id: 'ae4c557a-4523-4eb7-906b-4635e567b10c',
  name: 'The Goblin, Underworld Boss',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 6,
  alwaysLeads: [GOBLINS_FREAK_SHOW],
  keywords: [INVESTIGATE, HIDDEN_WITNESS],
  startOfGame: 'The Goblin captures 2 Hidden Witnesses',
  masterStrike:
    "Two random Bystanders from each player's Victory Pile become Hidden Witnesses held by The Goblin. Any player who didn't have two Bystanders gains a Wound instead.",
});
