import { EpicMastermindBuilder, IMastermind } from '../../../model';

import {
  ELITE_ASSASSINS,
  TASKMASTERS_THUNDERBOLTS,
} from './blackWidow.villains';
import { META } from './meta';

type AttackPoints = Pick<IMastermind, 'attackPoints'>;

const taskmaster = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Taskmaster',
  victoryPoints: 6,
  alwaysLeads: [TASKMASTERS_THUNDERBOLTS],
});

const tmAttackPoints: AttackPoints = {
  attackPoints: '5+',
};

export const TASKMASTER = taskmaster.buildNormal({
  id: 'f3c10c17-58c3-4a8f-9632-1def225bbcb6',
  ...tmAttackPoints,
});

export const EPIC_TASKMASTER = taskmaster.buildEpic({
  id: '49377bc2-47d1-4275-a24f-295e0d7dba00',
  ...tmAttackPoints,
});

const indestructibleMan = new EpicMastermindBuilder({
  gameSet: META,
  name: 'Indestructible Man',
  victoryPoints: 6,
  alwaysLeads: [ELITE_ASSASSINS],
});

const imAttackPoints: AttackPoints = {
  attackPoints: '*',
};

export const INDESTRUCTIBLE_MAN = indestructibleMan.buildNormal({
  id: '710e7038-eaa5-4d16-a43a-32eee624ed4c',
  ...imAttackPoints,
});

export const EPIC_INDESTRUCTIBLE_MAN = indestructibleMan.buildEpic({
  id: '702ed2c6-52a7-40cb-81f3-9fff3e21c917',
  ...imAttackPoints,
});
