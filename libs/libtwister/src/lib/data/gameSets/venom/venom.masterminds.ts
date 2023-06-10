import { EpicMastermindBuilder } from '../../../model';

import { SYMBIOTE_BONDS } from './venom.keywords';
import { META } from './venom.meta';
import { LIFE_FOUNDATION, POISONS } from './venom.villains';

const hybrid = new EpicMastermindBuilder({
  name: 'Hybrid',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [LIFE_FOUNDATION],
  keywords: [SYMBIOTE_BONDS],
});

export const HYBRID = hybrid.buildNormal({
  id: 'a2fcb3d5-4ae2-44e7-bc7f-63193faf5446',
  attackPoints: 6,
});

export const EPIC_HYBRID = hybrid.buildEpic({
  id: '2fbed495-883d-4962-928e-d78677add612',
  attackPoints: 8,
});

const poisonThanos = new EpicMastermindBuilder({
  name: 'Poison Thanos',
  gameSet: META,
  victoryPoints: 7,
  alwaysLeads: [POISONS],
});

export const POISON_THANOS = poisonThanos.buildNormal({
  id: 'be91be31-f5d5-40cf-aa46-21f393bf1659',
  attackPoints: 12,
});

export const EPIC_POISON_THANOS = poisonThanos.buildEpic({
  id: 'e591b841-9663-4f31-bd59-c79b23688b3f',
  attackPoints: 13,
});
