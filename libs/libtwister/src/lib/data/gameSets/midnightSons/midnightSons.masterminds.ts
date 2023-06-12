import { EpicMastermindBuilder } from '../../../model';

import { HAUNT, HUNT_FOR_VICTIMS } from './midnightSons.keywords';
import { META } from './midnightSons.meta';
import { LILIN, FALLEN } from './midnightSons.villains';

const lilith = new EpicMastermindBuilder({
  name: 'Lilith, Mother of Demons',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [LILIN],
  keywords: [HUNT_FOR_VICTIMS],
});

export const LILITH = lilith.buildNormal({
  id: '505a06ce-d2e9-44b2-b429-457967572d3c',
  attackPoints: '8+',
});

export const EPIC_LILITH = lilith.buildEpic({
  id: '06ef2527-96c7-43fa-a381-7f260ef762ac',
  attackPoints: '10+',
});

const zarathos = new EpicMastermindBuilder({
  name: 'Zarathos',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [FALLEN],
  keywords: [HAUNT],
});

export const ZARATHOS = zarathos.buildNormal({
  id: '52546c9a-67d2-4734-ab87-b651a95edcbb',
  attackPoints: 7,
});

export const EPIC_ZARATHOS = zarathos.buildEpic({
  id: '0f560e76-2bd0-4d3c-9680-25a7b4bcc91f',
  attackPoints: 9,
});
