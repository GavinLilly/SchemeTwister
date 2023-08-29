import { EpicMastermindBuilder } from '../../../model';
import { randomize } from '../../../utils/randomize';
import { SENTINELS } from '../legendary/legendary.henchmen';

import { SENTINEL_SQUAD_ONE } from './messiahComplex.henchmen';
import { PREY, SHATTER } from './messiahComplex.keywords';
import { META } from './messiahComplex.meta';
import { ACOLYTES, PURIFIERS, REAVERS } from './messiahComplex.villains';

const ladyDeathstrike = new EpicMastermindBuilder({
  name: 'Lady Deathstrike',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [REAVERS],
  keywords: [PREY],
});

export const LADY_DEATHSTRIKE = ladyDeathstrike.buildNormal({
  id: '901cc1e3-9adf-4d81-94c0-57ff75feaee5',
  attackPoints: 8,
});

export const EPIC_LADY_DEATHSTRIKE = ladyDeathstrike.buildEpic({
  id: '9b26e13e-e7aa-4f05-87a1-e4e4cb2e5c28',
  attackPoints: 11,
});

/**
 * @todo we should get the henchmen store in here in order to know which game
 * sets are enabled
 */
const bastion = new EpicMastermindBuilder({
  name: 'Bastion',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [PURIFIERS, randomize([SENTINELS, SENTINEL_SQUAD_ONE])],
});

export const BASTION = bastion.buildNormal({
  id: '767c7f38-fc44-4e89-afea-4ffa272127ee',
  attackPoints: '4+',
});

export const EPIC_BASTION = bastion.buildEpic({
  id: '9a57529c-2530-4341-8938-0b1eebece406',
  attackPoints: '6+',
});

const exodus = new EpicMastermindBuilder({
  name: 'Exodus',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [ACOLYTES],
  keywords: [SHATTER],
});

export const EXODUS = exodus.buildNormal({
  id: 'c015a218-c854-4a04-a9c8-5e595b79b831',
  attackPoints: '32*',
});

export const EPIC_EXODUS = exodus.buildEpic({
  id: '59ac6b60-6365-4eb1-85cb-5ef8693b324f',
  attackPoints: '36*',
});
