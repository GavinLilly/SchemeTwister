import { EpicMastermindBuilder, IMastermind, Mastermind } from '../../../model';
import { randomize } from '../../../utils/randomize';

import { SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT } from './xMen.henchmen';
import { DOMINATE, HUMAN_SHIELDS, TOKEN_CARDS, TRAPS } from './xMen.keywords';
import { META } from './xMen.meta';
import {
  DARK_DESCENDANTS,
  HELLFIRE_CLUB,
  MOJOVERSE,
  MURDERWORLD,
  SHADOW_X,
} from './xMen.villains';

const arcadeCommons: Pick<IMastermind, 'gameSet' | 'alwaysLeads' | 'keywords'> =
  {
    gameSet: META,
    alwaysLeads: [MURDERWORLD],
    keywords: [HUMAN_SHIELDS],
  };

export const ARCADE = new Mastermind({
  id: '48b50c53-78b8-4e47-86f9-20be6ffcdc72',
  name: 'Arcade',
  attackPoints: '3*',
  victoryPoints: 5,
  ...arcadeCommons,
});

export const EPIC_ARCADE = new Mastermind({
  id: '23cc52ee-2d3f-448f-8d67-5b19b29b30da',
  name: 'Epic Arcade',
  attackPoints: '4*',
  victoryPoints: 6,
  ...arcadeCommons,
});

const darkPhoenix = new EpicMastermindBuilder({
  name: 'Dark Phoenix',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [HELLFIRE_CLUB],
});

export const DARK_PHOENIX = darkPhoenix.buildNormal({
  id: 'b0f4dc4e-45fa-4cb6-8067-b13ee207ac9b',
  attackPoints: 13,
});

export const EPIC_DARK_PHOENIX = darkPhoenix.buildEpic({
  id: '252a3acd-f736-40cd-ae33-eebc6e0b459f',
  attackPoints: 15,
});

const deathbird = new EpicMastermindBuilder({
  name: 'Deathbird',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [randomize([SHIAR_DEATH_COMMANDOS, SHIAR_PATROL_CRAFT])],
  keywords: [TOKEN_CARDS],
});

const deathbirdAttackPoints: Pick<IMastermind, 'attackPoints'> = {
  attackPoints: '8+',
};

export const DEATHBIRD = deathbird.buildNormal({
  id: '24e6febf-7d5e-40eb-bdda-75956a53e66c',
  ...deathbirdAttackPoints,
});

export const EPIC_DEATHBIRD = deathbird.buildEpic({
  id: '56cd82c2-548a-48dd-a1d6-1437dbe5bda8',
  ...deathbirdAttackPoints,
});

const mojo = new EpicMastermindBuilder({
  name: 'Mojo',
  gameSet: META,
  victoryPoints: 5,
  alwaysLeads: [MOJOVERSE],
  keywords: [HUMAN_SHIELDS],
});

export const MOJO = mojo.buildNormal({
  id: '35177145-ec24-4858-98ed-0159e2e412ab',
  attackPoints: '6*',
});

export const EPIC_MOJO = mojo.buildEpic({
  id: '85112b60-5998-42c9-a212-1355a515f6ad',
  attackPoints: '7*',
});

const onslaught = new EpicMastermindBuilder({
  name: 'Onslaught',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [DARK_DESCENDANTS],
  keywords: [DOMINATE],
});

const onslaughtAttackPoints: Pick<IMastermind, 'attackPoints'> = {
  attackPoints: '12+',
};

export const ONSLAUGHT = onslaught.buildNormal({
  id: 'f6b04a2e-3673-49a3-8535-a2016b8853b7',
  ...onslaughtAttackPoints,
});

export const EPIC_ONSLAUGHT = onslaught.buildEpic({
  id: 'fe2edc38-9c90-4711-bfc2-cfb762456558',
  ...onslaughtAttackPoints,
});

const shadowKing = new EpicMastermindBuilder({
  name: 'ShadowKing',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [SHADOW_X],
  keywords: [DOMINATE, TRAPS],
});

export const SHADOW_KING = shadowKing.buildNormal({
  id: 'cc6e1ee5-a074-4e95-9488-8f455836085c',
  attackPoints: '7+',
});

export const EPIC_SHADOW_KING = shadowKing.buildEpic({
  id: '993c5dc0-e96e-4b04-a199-a73e5849e751',
  attackPoints: '9+',
});
