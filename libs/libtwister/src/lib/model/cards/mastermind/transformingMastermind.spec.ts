import * as uuid from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { createMockGamesetMeta } from '../../../mocks/mockUtils';
import { VillainGroup } from '../villainGroup';

import { TransformingMastermind } from './transformingMastermind';

describe('AdaptingMastermind', () => {
  let mastermind: TransformingMastermind;

  beforeAll(() => {
    const gameSet = createMockGamesetMeta();

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
