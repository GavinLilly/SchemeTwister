import { Mastermind } from '../../../model';

import { CONQUEROR } from './keywords';
import { META } from './meta';
import { ENEMIES_OF_ASGARD, HYDRA, IRON_FOES } from './villains';

export const IRON_MONGER = new Mastermind({
  id: 'a809a0db-8214-4547-9fd6-177c03050055',
  name: 'Iron Monger',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 5,
  alwaysLeads: [IRON_FOES],
  keywords: [CONQUEROR],
});

export const LOKI = new Mastermind({
  id: 'a9f48d6c-820c-4837-a5da-1342b4f0f338',
  name: 'Loki',
  gameSet: META,
  attackPoints: 10,
  victoryPoints: 5,
  alwaysLeads: [ENEMIES_OF_ASGARD],
});

export const RED_SKULL = new Mastermind({
  id: '750bdc8a-9583-4117-bab6-92238b26739a',
  name: 'Red Skull',
  gameSet: META,
  attackPoints: 7,
  victoryPoints: 5,
  alwaysLeads: [HYDRA],
});
