import { EpicMastermindBuilder, IMastermind } from '../../../model';

import { META } from './blackWidow.meta';
import {
  ELITE_ASSASSINS,
  TASKMASTERS_THUNDERBOLTS,
} from './blackWidow.villains';

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
  specialRules: `Henchmen get +1 Attack for each "Henchman Training" stacked here.
During your turn, Taskmaster gets + Attack equal to the highest cost Hero you played this turn.`,
  masterStrike:
    'Stack this Strike next to Taskmaster as "Henchman Training." If there are any Henchmen in the city, each player gains a Wound.',
});

export const EPIC_TASKMASTER = taskmaster.buildEpic({
  id: '49377bc2-47d1-4275-a24f-295e0d7dba00',
  ...tmAttackPoints,
  specialRules: `Henchmen get +2 Attack for each "Henchman Training" stacked here.
During your turn, Taskmaster gets +Attack equal to double the highest cost Hero you played this turn.`,
  masterStrike:
    'Stack this Strike next to Taskmaster as "Henchman Training." If there are any Henchmen in the city, each player gains a Wound.',
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
  specialRules: `You can't use Attack to fight Indestructible Man.
Once during each of your turns, you may shuffle two Elite Assassins from your Victory Pile into the Villain Deck. If you do, fight Indestructible Man.`,
  masterStrike:
    "Shuffle an Elite Assassin from your Victory Pile into the Villain Deck. If you can't, each player gains a Wound.",
});

export const EPIC_INDESTRUCTIBLE_MAN = indestructibleMan.buildEpic({
  id: '702ed2c6-52a7-40cb-81f3-9fff3e21c917',
  ...imAttackPoints,
  specialRules: `You can't use Attack to fight Indestructible Man.
Once during each of your turns, you may shuffle three Elite Assassins from your Victory Pile into the Villain Deck. If you do, fight Indestructible Man.`,
  masterStrike:
    "Each player shuffles an Elite Assassin from their Victory Pile into the Villain Deck. Each player that can't gains a Wound.",
});
