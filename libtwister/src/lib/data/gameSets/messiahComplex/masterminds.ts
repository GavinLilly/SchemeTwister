import { AbstractMastermind } from '../../../model';
import { randomize } from '../../../utils/randomize';
import { SENTINELS } from '../legendary/henchmen';

import { SENTINEL_SQUAD_ONE } from './henchmen';
import { PREY, SHATTER } from './keywords';
import { META } from './meta';
import { ACOLYTES, PURIFIERS, REAVERS } from './villains';

abstract class AbstractMessiahComplexMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class LadyDeathstrike extends AbstractMessiahComplexMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Lady Deathstrike', attackPoints, 6, REAVERS, epic, PREY);
  }
}

export const LADY_DEATHSTRIKE = new LadyDeathstrike(
  '901cc1e3-9adf-4d81-94c0-57ff75feaee5',
  8
);

export const EPIC_LADY_DEATHSTRIKE = new LadyDeathstrike(
  '9b26e13e-e7aa-4f05-87a1-e4e4cb2e5c28',
  11,
  true
);

/**
 * @todo we should get the henchmen store in here in order to know which
    game sets are enabled
 */
class Bastion extends AbstractMessiahComplexMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    const sentinel = randomize([SENTINELS, SENTINEL_SQUAD_ONE], 1)[0];
    super(id, 'Bastion', attackPoints, 6, [PURIFIERS, sentinel], epic);
  }
}

export const BASTION = new Bastion(
  '767c7f38-fc44-4e89-afea-4ffa272127ee',
  '4+'
);

export const EPIC_BASTION = new Bastion(
  '9a57529c-2530-4341-8938-0b1eebece406',
  '6+',
  true
);

class Exodus extends AbstractMessiahComplexMastermind {
  constructor(id: string, attackPoints: string | number, epic = false) {
    super(id, 'Exodus', attackPoints, 7, ACOLYTES, epic, SHATTER);
  }
}

export const EXODUS = new Exodus('c015a218-c854-4a04-a9c8-5e595b79b831', '32*');

export const EPIC_EXODUS = new Exodus(
  '59ac6b60-6365-4eb1-85cb-5ef8693b324f',
  '36*',
  true
);
