import { EpicMastermindBuilder } from '../../../model';
import { KeywordName } from '../../enums';

import { ENDGAME } from './mcuInfinitySaga.keywords';
import { META } from './mcuInfinitySaga.meta';
import {
  CHILDREN_OF_THANOS,
  INFINITY_STONES,
} from './mcuInfinitySaga.villains';

const thanos = new EpicMastermindBuilder({
  name: 'Thanos',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [INFINITY_STONES],
  mastermindWins: 'When 6 Infinity Stones escape.',
});

export const THANOS = thanos.buildNormal({
  id: '94946692-4e18-4b9e-be02-973543be232d',
  attackPoints: '11+',
  specialRules:
    'Thanos gets +1 Attack for each Infinity Stone in the city and/or Escape Pile.',
  masterStrike:
    "The leftmost Infinity Stone in the city escapes. Then an Infinity Stone worth 4VP or more enters the city from your Victory Pile. If you don't have any, each player gains a Wound.",
});

export const EPIC_THANOS = thanos.buildEpic({
  id: '8c615b1e-7e09-4f8d-ab1e-89dd8edb35b7',
  attackPoints: '13+',
  specialRules:
    'Thanos gets +2 Attack for each Infinity Stone in the city and/or Escape Pile.',
  masterStrike:
    "The lowest Attack Infinity Stone in the city escapes. Then an Infinity Stone worth 4VP or more enters the city from your Victory Pile. Each player that didn't have any gains a Wound.",
});

const ebonyMaw = new EpicMastermindBuilder({
  name: 'Ebony Maw',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [CHILDREN_OF_THANOS],
  keywords: [ENDGAME],
});

export const EBONY_MAW = ebonyMaw.buildNormal({
  id: '4199309b-1816-4747-994b-4145426e5b4e',
  attackPoints: '8+',
  specialRules: `${KeywordName.ENDGAME}: +4 Attack`,
  masterStrike:
    'It is the Endgame this turn. Each player reveals their hand and discards their highest-cost Hero. If it was already the Endgame, KO those Heroes.',
});

export const EPIC_EBONY_MAW = ebonyMaw.buildEpic({
  id: 'cf25bc47-fb0a-4c04-b767-98f578a891c3',
  attackPoints: '10+',
  specialRules: `${KeywordName.ENDGAME}: +5 Attack`,
  masterStrike:
    'It is the Endgame this turn. Each player reveals their hand and KOs their highest-cost Hero. If it was already the Endgame, play another card from the Villain Deck.',
});
