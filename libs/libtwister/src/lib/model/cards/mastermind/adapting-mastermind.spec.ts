import { v4 as uuidV4 } from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { createMockGamesetMeta } from '../../../mocks/mock.utils';
import { VillainGroup } from '../villain-group';

import { AdaptingMastermind } from './adapting-mastermind';

describe('AdaptingMastermind', () => {
  let mastermind: AdaptingMastermind;

  beforeAll(() => {
    const gameSet = createMockGamesetMeta();

    const villain = new VillainGroup({
      id: uuidV4(),
      gameSet: gameSet,
      name: 'Test Villain',
    });

    mastermind = new AdaptingMastermind(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: uuidV4(),
        name: 'Test Mastermind',
        victoryPoints: 5,
      },
      {
        attackPoints: 1,
        fight: 'FIGHT1',
        masterStrike: 'MS1',
        name: 'MM1',
      },
      {
        attackPoints: 2,
        fight: 'FIGHT2',
        masterStrike: 'MS2',
        name: 'MM2',
      },
      {
        attackPoints: 3,
        fight: 'FIGHT3',
        masterStrike: 'MS3',
        name: 'MM3',
      },
      {
        attackPoints: 4,
        fight: 'FIGHT4',
        masterStrike: 'MS4',
        name: 'MM4',
      }
    );
  });

  it('should create', () => expect(mastermind).toBeTruthy());

  it('should return 4 masterminds', () =>
    expect(mastermind.masterminds).toHaveLength(4));
});
