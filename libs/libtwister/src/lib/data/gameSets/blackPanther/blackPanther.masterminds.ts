import { EpicMastermindBuilder } from '../../../model';
import { EMPOWERED } from '../antMan/antMan.keywords';

import { META } from './blackPanther.meta';
import {
  ENEMIES_OF_WAKANDA,
  KILLMONGERS_LEAGUE,
} from './blackPanther.villains';

const killmonger = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Killmonger',
  victoryPoints: 4,
  alwaysLeads: [KILLMONGERS_LEAGUE],
});

export const KILLMONGER = killmonger.buildNormal({
  id: '48ab2fc0-7745-472c-a902-93df093ae08d',
  attackPoints: '5*',
});

export const EPIC_KILLMONGER = killmonger.buildEpic({
  id: '2a52145a-379a-4b30-85a4-5295edd7526c',
  attackPoints: '6*',
});

const klaw = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Klaw',
  victoryPoints: 6,
  alwaysLeads: [ENEMIES_OF_WAKANDA],
  keywords: [EMPOWERED],
});

export const KLAW = klaw.buildNormal({
  id: '256cc621-c0bc-4fd6-868a-c3ca6b6616d7',
  attackPoints: '8+',
});

export const EPIC_KLAW = klaw.buildEpic({
  id: '73ab549c-38d4-4ebd-a513-9992664e9fcd',
  attackPoints: '10+',
});
