import { CardType } from '../enums';
import { GameSets } from '../gamesets';
import { PaintTheTownRed as PaintTheTownRedKeywords } from '../keywords';
import { VillainGroups } from '../villains';

import { IMastermind } from './mastermind.interface';

type MastermindNames = 'CARNAGE' | 'MYSTERIO';

export const PaintTheTownRed: Record<MastermindNames, IMastermind> = {
  CARNAGE: {
    id: '9e4870e5-7137-4c2f-994f-aa70876a8dae',
    name: 'Carnage',
    alwaysLeads: [VillainGroups.PAINT_THE_TOWN_RED.MAXIMUM_CARNAGE],
    attackPoints: 9,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
    keywords: [PaintTheTownRedKeywords.Feast],
  },
  MYSTERIO: {
    id: '41e155a1-92e7-4c76-992f-319cd55c47f0',
    name: 'Mysterio',
    alwaysLeads: [VillainGroups.PAINT_THE_TOWN_RED.SINISTER_SIX],
    attackPoints: 8,
    victoryPoints: 6,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.PAINT_THE_TOWN_RED,
  },
};
