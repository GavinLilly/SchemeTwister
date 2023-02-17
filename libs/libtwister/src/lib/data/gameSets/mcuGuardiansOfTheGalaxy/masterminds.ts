import { AbstractMastermind } from '../../../model';
import { VILLAINOUS_WEAPONS } from '../heroesOfAsgard/keywords';

import { TRIGGERED_ARTIFACTS } from './keywords';
import { META } from './meta';
import { FOLLOWERS_OF_RONAN } from './villains';

abstract class AbstractMcuGuardiansOfTheGalaxyMastermind extends AbstractMastermind {
  public readonly gameSetId = META.id;
}

class RonanTheAccuser extends AbstractMcuGuardiansOfTheGalaxyMastermind {
  constructor(id: string, attackPoints: number, epic = false) {
    super(
      id,
      'Ronan the Accuser',
      attackPoints,
      0,
      FOLLOWERS_OF_RONAN,
      epic,
      VILLAINOUS_WEAPONS,
      TRIGGERED_ARTIFACTS
    );
  }
}

export const RONAN_THE_ACCUSER = new RonanTheAccuser(
  '1faead13-40f8-4583-8aa1-9b16778aa1d7',
  6
);

export const EPIC_RONAN_THE_ACCUSER = new RonanTheAccuser(
  'f2defecb-0e5c-4b4a-9d5c-cb17f707a744',
  7,
  true
);

class EgoTheLivingPlanet extends AbstractMcuGuardiansOfTheGalaxyMastermind {
  constructor(id: string, attackPoints: string, epic = false) {
    super(id, 'Ego, the Living Planet', attackPoints, 0, undefined, epic);
  }
}

export const EGO_THE_LIVING_PLANET = new EgoTheLivingPlanet(
  'b901a133-3a12-4492-9efb-a9dcea7c53b6',
  '3+'
).withRuleOverride((rule) => {
  rule.villainDeck.numVillainGroups++;
  return rule;
});

export const EPIC_EGO_THE_LIVING_PLANET = new EgoTheLivingPlanet(
  '7474eef1-38f4-4127-8ce8-e38296fadcc1',
  '1+',
  true
).withRuleOverride((rule) => {
  rule.villainDeck.numVillainGroups += 2;
  return rule;
});
