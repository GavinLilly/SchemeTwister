import { EpicMastermindBuilder } from '../../../model';

import { ABOMINATION, THRONES_FAVOR } from './keywords';
import { META } from './meta';
import { INHUMAN_REBELLION, SHIAR_IMPERIAL_ELITE } from './villains';

const maximusTheMad = new EpicMastermindBuilder({
  name: 'Maximus the Mad',
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [INHUMAN_REBELLION],
  keywords: [THRONES_FAVOR, ABOMINATION],
});

export const MAXIMUS_THE_MAD = maximusTheMad.buildNormal({
  id: '24610267-6acd-4b1f-899c-48b3a43af94f',
  attackPoints: 8,
});

export const EPIC_MAXIMUS_THE_MAD = maximusTheMad.buildEpic({
  id: 'ae9b5953-23ca-4066-8ab4-d76291644ae7',
  attackPoints: 9,
});

const vulcan = new EpicMastermindBuilder({
  name: "Emperor Vulcan of the Shi'ar",
  gameSet: META,
  victoryPoints: 6,
  alwaysLeads: [SHIAR_IMPERIAL_ELITE],
  keywords: [THRONES_FAVOR],
});

export const EMPEROR_VULCAN_OF_THE_SHIAR = vulcan.buildNormal({
  id: '21b14872-e23d-46d6-b721-94483dad908a',
  attackPoints: 10,
});

export const EPIC_EMPEROR_VULCAN_OF_THE_SHIAR = vulcan.buildEpic({
  id: 'e3289899-5eb0-45fa-8321-3e24e1dd1fd3',
  attackPoints: 12,
});
