import * as uuid from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { TEST_SERIES_META_1 } from '../../../testData/seriesMeta';
import { GAME_SET_SIZE } from '../../types';
import { VillainGroup } from '../villainGroup';

import { AdaptingMastermind } from './adaptingMastermind';

describe('AdaptingMastermind', () => {
  let mastermind: AdaptingMastermind;

  beforeAll(() => {
    const gameSet = {
      id: uuid.v4(),
      name: 'Test GameSet',
      releaseYear: 2024,
      series: TEST_SERIES_META_1,
      size: GAME_SET_SIZE.core,
    };

    const villain = new VillainGroup({
      id: uuid.v4(),
      gameSet: gameSet,
      name: 'Test Villain',
    });

    mastermind = new AdaptingMastermind(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: uuid.v4(),
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
