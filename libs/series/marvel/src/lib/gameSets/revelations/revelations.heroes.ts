import { Hero } from '@schemetwister/libtwister';
import { AVENGERS, SHIELD } from '@schemetwister/series-marvel-common';

import { DARK_MEMORIES, HYPERSPEED, LAST_STAND } from './revelations.keywords';
import { META } from './revelations.meta';

export const CAPTAIN_MARVEL_AGENT_OF_SHIELD = new Hero({
  id: '198052b7-8307-4b1c-bd14-058c7f3ebef7',
  name: 'Captain Marvel, Agent of S.H.I.E.L.D.',
  team: SHIELD,
  gameSet: META,
  keywords: [LAST_STAND],
});

export const DARKHAWK = new Hero({
  id: '96544ae9-9d25-44e1-93c0-96b383f107a5',
  name: 'Darkhawk',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED],
});

export const HELLCAT = new Hero({
  id: '30c89c60-4325-4f5e-9760-4329152a9648',
  name: 'Hellcat',
  team: AVENGERS,
  gameSet: META,
});

export const PHOTON = new Hero({
  id: 'bdf6f937-878d-4479-8e28-280d0d6dcd73',
  name: 'Photon',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED, LAST_STAND],
});

export const QUICKSILVER = new Hero({
  id: 'e4e5fee4-3a34-4644-9018-24bb6799d867',
  name: 'Quicksilver',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED],
});

export const RONIN = new Hero({
  id: 'fa2e2727-b5b8-4d3b-834b-5a3501bc13f1',
  name: 'Ronin',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED, DARK_MEMORIES],
});

export const SCARLET_WITCH = new Hero({
  id: '347f5ae3-71b2-438c-8bcc-db61abd145f4',
  name: 'Scarlet Witch',
  team: AVENGERS,
  gameSet: META,
  keywords: [DARK_MEMORIES],
});

export const SPEED = new Hero({
  id: '1a74003d-da97-4de2-a598-1b0ae7a9696a',
  name: 'Speed',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED],
});

export const WAR_MACHINE = new Hero({
  id: '683bc52e-0023-4008-aa59-571a9296d399',
  name: 'War Machine',
  team: AVENGERS,
  gameSet: META,
  keywords: [HYPERSPEED],
});
