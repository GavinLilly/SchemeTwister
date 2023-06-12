import { EpicMastermindBuilder, IMastermind } from '../../../model';

import { DANGER_SENSE, STRIKER } from './spidermanHomecoming.keywords';
import { META } from './spidermanHomecoming.meta';
import { SALVAGERS, VULTURE_TECH } from './spidermanHomecoming.villains';

const adrianToomes = new EpicMastermindBuilder({
  name: 'Adrian Toomes',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [SALVAGERS],
  keywords: [DANGER_SENSE, STRIKER],
});

const toomesAttackPoints: Pick<IMastermind, 'attackPoints'> = {
  attackPoints: '5+',
};

export const ADRIAN_TOOMES = adrianToomes.buildNormal({
  id: '2b7ede2e-4f67-4152-9dcd-e91ae624c454',
  ...toomesAttackPoints,
});

export const EPIC_ADRIAN_TOOMES = adrianToomes.buildEpic({
  id: 'a06ffef2-06a0-4475-9110-ebe5ca46402e',
  ...toomesAttackPoints,
});

const vulture = new EpicMastermindBuilder({
  name: 'Vulture',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [VULTURE_TECH],
  keywords: [DANGER_SENSE, STRIKER],
});

export const VULTURE = vulture.buildNormal({
  id: '5826e339-b396-4b55-95bd-cb1867bb7991',
  attackPoints: '8+',
});

export const EPIC_VULTURE = vulture.buildEpic({
  id: 'c172fb7e-ff79-4837-b5cf-974ee4148c81',
  attackPoints: '10+',
});
