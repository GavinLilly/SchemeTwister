import { beforeAll, describe, expect, it } from 'vitest';

import { faker } from '@faker-js/faker';
import { createMockGamesetMeta } from '../../../mocks/mock.utils';
import { VillainGroup } from '../villain-group';
import { MastermindWithEpic } from './mastermind-with-epic';

const epicRegex = /^Epic?/;

describe('MastermindWithEpic', () => {
  let villain: VillainGroup;
  let mastermind: MastermindWithEpic;

  beforeAll(() => {
    const gameSet = createMockGamesetMeta();

    villain = new VillainGroup({
      id: faker.string.uuid(),
      gameSet: gameSet,
      name: 'Test Villain',
    });

    mastermind = new MastermindWithEpic(
      {
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: faker.string.uuid(),
        masterStrike: '',
        name: 'Test Mastermind',
        victoryPoints: 5,
      },
      {
        id: faker.string.uuid(),
      }
    );
  });

  describe('that is not epic', () => {
    it('should create', () => expect(mastermind).toBeTruthy());

    it('should not have "Epic" in the name', () =>
      expect(mastermind.name).not.toMatch(epicRegex));

    it('should have 1 Test Villain in the always leads', () => {
      expect(mastermind.alwaysLeads).toHaveLength(1);
      expect(mastermind.alwaysLeads).toContain(villain);
    });

    it('should not be epic', () => expect(mastermind.isEpic).toBe(false));

    it('should have 5 attack points', () =>
      expect(mastermind.attackPoints).toBe(10));

    it('should have 4 victory points', () =>
      expect(mastermind.victoryPoints).toBe(5));
  });

  describe('that is epic', () => {
    it('should create', () => expect(mastermind.epic).toBeTruthy());

    it('should have "Epic" in the name', () =>
      expect(mastermind.epic.name).toMatch(epicRegex));

    it('should be epic', () => expect(mastermind.epic.isEpic).toBe(true));

    it('should have a reverse that matches the non-epic mastermind', () =>
      expect(mastermind.epic.reverse).toEqual(mastermind));
  });
});
