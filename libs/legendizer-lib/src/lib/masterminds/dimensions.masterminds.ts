import { CardType } from '../cardSet';
import { GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { IMastermind } from './mastermind.interface';

type MastermindNames = 'J_JONAH_JAMESON' | 'EPIC_J_JONAH_JAMESON';

export const Dimensions: Record<MastermindNames, IMastermind> = {
  J_JONAH_JAMESON: {
    id: '40c8699c-f848-4228-b9e2-b5fb5f69e3ef',
    name: 'J. Jonah Jameson',
    alwaysLeads: [Henchmen.DIMENSIONS.SPIDERSLAYER],
    attackPoints: '4',
    victoryPoints: 5,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.DIMENSIONS,
  },
  EPIC_J_JONAH_JAMESON: {
    id: '1a464f77-8e35-4ff0-8c32-c38eb5bf88ac',
    name: 'Epic J. Jonah Jameson',
    alwaysLeads: [Henchmen.DIMENSIONS.SPIDERSLAYER],
    attackPoints: '5*',
    victoryPoints: 5,
    cardType: CardType.MASTERMIND,
    gameSet: GameSets.DIMENSIONS,
  },
};
