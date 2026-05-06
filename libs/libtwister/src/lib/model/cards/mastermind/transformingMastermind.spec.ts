import * as uuid from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { TEST_SERIES_META_1 } from '../../../testData/seriesMeta';
import { GAME_SET_SIZE } from '../../types';
import { VillainGroup } from '../villainGroup';

import { TransformingMastermind } from './transformingMastermind';

describe('AdaptingMastermind', () => {
  let mastermind: TransformingMastermind;

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

    mastermind = new TransformingMastermind(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: uuid.v4(),
        name: 'Test Mastermind',
        victoryPoints: 5,
        masterStrike: 'Masterstrike',
      },
      {
        attackPoints: 20,
        masterStrike: 'Transformed Masterstrike',
        name: 'Transformed',
      }
    );
  });

  it('should create', () => expect(mastermind).toBeTruthy());

  it('should get the transformed mastermind', () =>
    expect(mastermind.transformed.name).toBe('Transformed'));
});
