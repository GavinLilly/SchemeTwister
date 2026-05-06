import { Mastermind, MastermindWithEpic } from '../model';

import { TEST_GAME_SET_META_1 } from './gameSets';
import { TEST_HENCHMEN_1 } from './henchmen';
import { TEST_VILLAIN_1, TEST_VILLAIN_5 } from './villains';

export const TEST_MASTERMIND_1 = new Mastermind({
  id: 'c52272b6-a375-4bb1-89c0-40603d9abab9',
  name: 'Test mastermind 1',
  alwaysLeads: [TEST_VILLAIN_1],
  attackPoints: 6,
  gameSet: TEST_GAME_SET_META_1,
  masterStrike: 'Master strike',
  victoryPoints: 6,
});

export const TEST_MASTERMIND_2 = new MastermindWithEpic(
  {
    id: '57f77ef4-6fb7-4bff-b65c-8eceeb6b3695',
    name: 'Test mastermind 2',
    alwaysLeads: [TEST_HENCHMEN_1, TEST_VILLAIN_5],
    attackPoints: 6,
    gameSet: TEST_GAME_SET_META_1,
    masterStrike: 'Master strike',
    victoryPoints: 6,
  },
  {
    id: '4fb769ba-44e9-494a-950e-b1b6b035bc49',
  }
);
