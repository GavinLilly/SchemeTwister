import { Mastermind } from '../../../model';

import { FEAST } from './keywords';
import { META } from './meta';
import { MAXIMUM_CARNAGE, SINISTER_SIX } from './villains';

export const CARNAGE = new Mastermind({
  id: '9e4870e5-7137-4c2f-994f-aa70876a8dae',
  name: 'Carnage',
  gameSet: META,
  attackPoints: 9,
  victoryPoints: 6,
  alwaysLeads: [MAXIMUM_CARNAGE],
  keywords: [FEAST],
});

export const MYSTERIO = new Mastermind({
  id: '41e155a1-92e7-4c76-992f-319cd55c47f0',
  name: 'Mysterio',
  gameSet: META,
  attackPoints: 8,
  victoryPoints: 6,
  alwaysLeads: [SINISTER_SIX],
});
