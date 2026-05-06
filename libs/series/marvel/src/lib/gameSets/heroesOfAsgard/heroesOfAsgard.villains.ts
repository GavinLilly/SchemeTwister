import { VillainGroup } from '@schemetwister/libtwister';
import {
  ARTIFACT,
  THROWN_ARTIFACT,
  VILLAINOUS_WEAPONS,
  CONQUEROR,
} from '@schemetwister/series-marvel-common';

import { WORTHY } from './heroesOfAsgard.keywords';
import { META } from './heroesOfAsgard.meta';

export const DARK_COUNCIL = new VillainGroup({
  id: 'ca7fd688-3d19-4ec2-b190-adf8b58eb67a',
  name: 'Dark Council',
  gameSet: META,
  keywords: [ARTIFACT, THROWN_ARTIFACT, WORTHY, VILLAINOUS_WEAPONS],
});

export const OMENS_OF_RAGNAROK = new VillainGroup({
  id: '2948ab8b-45f6-418c-8b1b-304a43e79878',
  name: 'Omens of Ragnarok',
  gameSet: META,
  keywords: [ARTIFACT, CONQUEROR, VILLAINOUS_WEAPONS],
});
