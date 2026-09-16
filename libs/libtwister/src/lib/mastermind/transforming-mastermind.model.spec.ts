import { faker } from '@faker-js/faker';
import { beforeAll, describe, expect, it } from 'vitest';

import { createMockGamesetMeta } from '../testing/mocks/mock.utils';
import { VillainGroup } from '../villain-group/villain-group.model';

import { TransformingMastermind } from './transforming-mastermind.model';

describe('AdaptingMastermind', () => {
  let mastermind: TransformingMastermind;

  beforeAll(() => {
    const gameSet = createMockGamesetMeta();

    const villain = new VillainGroup({
      id: faker.string.uuid(),
      gameSet: gameSet,
      name: 'Test Villain',
    });

    mastermind = new TransformingMastermind(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: faker.string.uuid(),
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
