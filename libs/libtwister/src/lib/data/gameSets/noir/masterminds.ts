import { AbstractMastermind } from '../../../model';

import { HIDDEN_WITNESS, INVESTIGATE } from './keywords';
import { META } from './meta';
import { GOBLINS_FREAK_SHOW, XMEN_NOIR } from './villains';

class NoirMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

export const CHARLES_XAVIER_PROFESSOR_OF_CRIME = new NoirMastermind(
  'c31d1352-17f4-4389-82ca-d94c70409966',
  'Charles Xavier, Professor of Crime',
  8,
  6,
  XMEN_NOIR,
  false,
  INVESTIGATE,
  HIDDEN_WITNESS
);

export const THE_GOBLIN_UNDERWORLD_BOSS = new NoirMastermind(
  'ae4c557a-4523-4eb7-906b-4635e567b10c',
  'The Goblin, Underworld Boss',
  10,
  6,
  GOBLINS_FREAK_SHOW,
  false,
  INVESTIGATE,
  HIDDEN_WITNESS
);
