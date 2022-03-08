import { AbstractMastermind } from '../../../model';
import { randomize } from '../../../utils/randomize';

import { SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT } from './henchmen';
import { DOMINATE, HUMAN_SHIELDS, TOKEN_CARDS, TRAPS } from './keywords';
import { META } from './meta';
import {
  DARK_DESCENDANTS,
  HELLFIRE_CLUB,
  MOJOVERSE,
  MURDERWORLD,
  SHADOW_X,
} from './villains';

abstract class AbstractXMenMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class Arcade extends AbstractXMenMastermind {
  constructor(
    id: string,
    attackPoints: string | number,
    victoryPoints: number,
    epic = false
  ) {
    super(
      id,
      'Arcade',
      attackPoints,
      victoryPoints,
      MURDERWORLD,
      epic,
      HUMAN_SHIELDS
    );
  }
}

export const ARCADE = new Arcade(
  '48b50c53-78b8-4e47-86f9-20be6ffcdc72',
  '3*',
  5
);

export const EPIC_ARCADE = new Arcade(
  '23cc52ee-2d3f-448f-8d67-5b19b29b30da',
  '4*',
  6,
  true
);

class DarkPhoenix extends AbstractXMenMastermind {
  victoryPoints = 7;

  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Dark Phoenix', attackPoints, 7, HELLFIRE_CLUB, epic);
  }
}

export const DARK_PHOENIX = new DarkPhoenix(
  'b0f4dc4e-45fa-4cb6-8067-b13ee207ac9b',
  13
);

export const EPIC_DARK_PHOENIX = new DarkPhoenix(
  '252a3acd-f736-40cd-ae33-eebc6e0b459f',
  15,
  true
);

class Deathbird extends AbstractXMenMastermind {
  constructor(id: string, epic = false) {
    const chosenLeads = randomize(
      [SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT],
      1
    )[0];
    super(id, 'Deathbird', '8+', 6, chosenLeads, epic, TOKEN_CARDS);
  }
}

export const DEATHBIRD = new Deathbird('24e6febf-7d5e-40eb-bdda-75956a53e66c');

export const EPIC_DEATHBIRD = new Deathbird(
  '56cd82c2-548a-48dd-a1d6-1437dbe5bda8',
  true
);

class Mojo extends AbstractXMenMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Mojo', attackPoints, 5, MOJOVERSE, epic, HUMAN_SHIELDS);
  }
}

export const MOJO = new Mojo('35177145-ec24-4858-98ed-0159e2e412ab', '6*');

export const EPIC_MOJO = new Mojo(
  '85112b60-5998-42c9-a212-1355a515f6ad',
  '7*',
  true
);

class Onslaught extends AbstractXMenMastermind {
  constructor(id: string, epic = false) {
    super(id, 'Onslaught', '12+', 7, DARK_DESCENDANTS, epic, DOMINATE);
  }
}

export const ONSLAUGHT = new Onslaught('f6b04a2e-3673-49a3-8535-a2016b8853b7');

export const EPIC_ONSLAUGHT = new Onslaught(
  'fe2edc38-9c90-4711-bfc2-cfb762456558',
  true
);

class ShadowKing extends AbstractXMenMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'ShadowKing', attackPoints, 6, SHADOW_X, epic, DOMINATE, TRAPS);
  }
}

export const SHADOW_KING = new ShadowKing(
  'cc6e1ee5-a074-4e95-9488-8f455836085c',
  '7+'
);

export const EPIC_SHADOW_KING = new ShadowKing(
  '993c5dc0-e96e-4b04-a199-a73e5849e751',
  '9+',
  true
);
