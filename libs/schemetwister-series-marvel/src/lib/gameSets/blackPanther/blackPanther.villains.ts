import { VillainGroup } from '@schemetwister/libtwister';

import { EMPOWERED } from '../antMan/antMan.keywords';

import { META } from './blackPanther.meta';

export const KILLMONGERS_LEAGUE = new VillainGroup({
  id: '92b6d184-167c-48c4-bfe3-af9647289783',
  name: "Killmonger's League",

  gameSet: META,
});

export const ENEMIES_OF_WAKANDA = new VillainGroup({
  id: '6c925a24-caf0-4fe5-af81-e26c3933fedf',
  name: 'Enemies of Wakanda',

  gameSet: META,
  keywords: [EMPOWERED],
});
