import { Hero, CARD_TYPE } from '@schemetwister/libtwister';

import { X_MEN } from '../../teams';
import { TELEPORT } from '../darkCity/darkCity.keywords';

import { META } from './xMen.meta';

export const CYPHER = new Hero({
  id: '5d6476a3-dea9-4cc5-9b8b-6a76126fb52d',
  name: 'Cypher',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const HEARTLESS_COMPUTER_SCIENTIST = new Hero({
  id: 'f36a5f45-66d1-4841-84b1-72b66517fae5',
  name: 'Heartless Computer Scientist',
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const KARMA = new Hero({
  id: '15f0702b-cce3-4a05-949f-1f704516b2e8',
  name: 'Karma',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const MAGIK = new Hero({
  id: '5ed9e2e5-934e-4469-a890-aa57e75fd7aa',
  name: 'Magik',
  team: X_MEN,
  gameSet: META,
  keywords: [TELEPORT],
  cardType: CARD_TYPE.bystander,
});

export const MAGMA = new Hero({
  id: 'cc9dbd5f-2c5a-4d83-9de0-0d5bd1985cb6',
  name: 'Magma',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const MARTIAL_ARTS_MASTER = new Hero({
  id: '5ec56fec-0b61-47b2-b19c-76d3098c9da0',
  name: 'Martial Arts Master',
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const MIRAGE = new Hero({
  id: '655dadcd-16ef-47a5-905a-ab20c3a1ec5a',
  name: 'Mirage',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const SUNSPOT = new Hero({
  id: 'fae9d54d-01ea-4aa7-bb4f-cc1a063c10b4',
  name: 'Sunspot',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const WARLOCK = new Hero({
  id: '272ba739-4bb9-400d-8da9-3608ff0db2db',
  name: 'Warlock',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});

export const WOLFSBANE = new Hero({
  id: '7d7d24cb-cf18-4d77-8749-324554f245f1',
  name: 'Wolfsbane',
  team: X_MEN,
  gameSet: META,
  cardType: CARD_TYPE.bystander,
});
