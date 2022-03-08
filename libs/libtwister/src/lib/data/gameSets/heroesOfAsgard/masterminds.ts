import { AbstractMastermind } from '../../../model';
import { THROWN_ARTIFACT } from '../fearItself/keywords';
import { ARTIFACT } from '../guardiansOfTheGalaxy/keywords';
import { CONQUEROR } from '../marvelStudios/keywords';

import { VILLAINOUS_WEAPONS } from './keywords';
import { META } from './meta';
import { DARK_COUNCIL, OMENS_OF_RAGNAROK } from './villains';

abstract class AbstractHeroesOfAsgardMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Malekith extends AbstractHeroesOfAsgardMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Malekith the Accursed',
      attackPoints,
      6,
      DARK_COUNCIL,
      epic,
      ARTIFACT,
      THROWN_ARTIFACT,
      VILLAINOUS_WEAPONS
    );
  }
}

export const MALEKITH = new Malekith('666bc5a4-f156-4b7e-b978-917f0f9ea888', 8);

export const EPIC_MALEKITH = new Malekith(
  '55ba618a-f935-4d75-ae83-5d78fa71e177',
  10,
  true
);

class Hela extends AbstractHeroesOfAsgardMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(
      id,
      'Hela, Goddess of Death',
      attackPoints,
      6,
      OMENS_OF_RAGNAROK,
      epic,
      ARTIFACT,
      THROWN_ARTIFACT,
      CONQUEROR,
      VILLAINOUS_WEAPONS
    );
  }
}

export const HELA = new Hela('7e0e4ad1-34b6-41a1-939c-713ac0b1cc05', 10);

export const EPIC_HELA = new Hela(
  '91809fea-40ce-4238-ab2b-686bd76926b2',
  12,
  true
);
