import { EpicMastermindBuilder } from '../../../model';
import { VILLAINOUS_WEAPONS } from '../heroesOfAsgard/heroesOfAsgard.keywords';

import { TRIGGERED_ARTIFACTS } from './mcuGuardiansOfTheGalaxy.keywords';
import { META } from './mcuGuardiansOfTheGalaxy.meta';
import { FOLLOWERS_OF_RONAN } from './mcuGuardiansOfTheGalaxy.villains';

const ronanTheAccuser = new EpicMastermindBuilder({
  name: 'Ronan the Accuser',
  gameSet: META,
  victoryPoints: 0,
  alwaysLeads: [FOLLOWERS_OF_RONAN],
  keywords: [VILLAINOUS_WEAPONS, TRIGGERED_ARTIFACTS],
});

export const RONAN_THE_ACCUSER = ronanTheAccuser.buildNormal({
  id: '1faead13-40f8-4583-8aa1-9b16778aa1d7',
  attackPoints: 6,
});

export const EPIC_RONAN_THE_ACCUSER = ronanTheAccuser.buildEpic({
  id: 'f2defecb-0e5c-4b4a-9d5c-cb17f707a744',
  attackPoints: 7,
});

const ego = new EpicMastermindBuilder({
  name: 'Ego, The Living Planet',
  gameSet: META,
  victoryPoints: 0,
  alwaysLeads: [],
});

export const EGO_THE_LIVING_PLANET = ego.buildNormal({
  id: 'b901a133-3a12-4492-9efb-a9dcea7c53b6',
  attackPoints: '3+',
  ruleOverride: (rule) => {
    rule.villainDeck.numVillainGroups++;
    return rule;
  },
});

export const EPIC_EGO_THE_LIVING_PLANET = ego.buildNormal({
  id: '7474eef1-38f4-4127-8ce8-e38296fadcc1',
  attackPoints: '1+',
  ruleOverride: (rule) => {
    rule.villainDeck.numVillainGroups += 2;
    return rule;
  },
});
