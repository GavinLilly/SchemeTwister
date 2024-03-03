import { TEST_HENCHMEN_1 } from '../../../testData/henchmen';
import {
  TEST_MASTERMIND_1,
  TEST_MASTERMIND_2,
} from '../../../testData/masterminds';
import { TEST_VILLAIN_1, TEST_VILLAIN_5 } from '../../../testData/villains';

import { Mastermind } from './mastermind';

const epicRegex = new RegExp(`^Epic?`);

describe('Mastermind', () => {
  describe('with 1 villain as always leads', () => {
    describe('that is not epic', () => {
      it('should create', () => expect(TEST_MASTERMIND_1).toBeTruthy());

      it('should not have "Epic" in the name', () =>
        expect(TEST_MASTERMIND_1.name).not.toMatch(epicRegex));

      it('should have 1 Test Villain in the always leads', () => {
        expect(TEST_MASTERMIND_1.alwaysLeads).toHaveLength(1);
        expect(TEST_MASTERMIND_1.alwaysLeads).toContain(TEST_VILLAIN_1);
      });

      it('should not be epic', () =>
        expect(TEST_MASTERMIND_1.isEpic).toBe(false));

      it('should have 5 attack points', () =>
        expect(TEST_MASTERMIND_1.attackPoints).toBe(6));

      it('should have 4 victory points', () =>
        expect(TEST_MASTERMIND_1.victoryPoints).toBe(6));
    });

    describe('that is epic', () => {
      it('should create', () => expect(TEST_MASTERMIND_2.epic).toBeTruthy());

      it('should have "Epic" in the name', () =>
        expect(TEST_MASTERMIND_2.epic.name).toMatch(epicRegex));

      it('should be epic', () =>
        expect(TEST_MASTERMIND_2.epic.isEpic).toBe(true));
    });
  });

  describe('with 2 villains in the always leads', () => {
    it('should create', () => expect(TEST_MASTERMIND_2).toBeTruthy());

    it('should have 2 Test Villains in the always leads', () => {
      expect(TEST_MASTERMIND_2.alwaysLeads).toHaveLength(2);
      expect(TEST_MASTERMIND_2.alwaysLeads).toContain(TEST_HENCHMEN_1);
      expect(TEST_MASTERMIND_2.alwaysLeads).toContain(TEST_VILLAIN_5);
    });
  });

  describe('that is empty', () => {
    it('should create', () => expect(Mastermind.empty()).toBeDefined());
  });
});
