import { v4 as uuidV4 } from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { createMockGamesetMeta } from '../../../mocks/mock.utils';
import { VillainGroup } from '../villain-group';

import { TransformingMastermind } from './transforming-mastermind';

describe('AdaptingMastermind', () => {
  let mastermind: TransformingMastermind;

  beforeAll(() => {
    const gameSet = createMockGamesetMeta();

    const villain = new VillainGroup({
      id: uuidV4(),
      gameSet: gameSet,
      name: 'Test Villain',
    });

    mastermind = new TransformingMastermind(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: uuidV4(),
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
