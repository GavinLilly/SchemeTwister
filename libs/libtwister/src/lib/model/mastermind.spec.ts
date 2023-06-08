import legendary from '../data/gameSets/legendary';

import { Mastermind } from './mastermind';
import { VillainGroup } from './villainGroup';

const epicRegex = new RegExp(`^Epic?`);

const testVillain1 = new VillainGroup({
  gameSet: legendary,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 1',
});

const testVillain2 = new VillainGroup({
  gameSet: legendary,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 2',
});

const BASE_MASTERMIND = {
  attackPoints: 5,
  victoryPoints: 4,
  alwaysLeads: [testVillain1],
  gameSet: legendary,
};

describe('Mastermind', () => {
  describe('with 1 villain as always leads', () => {
    describe('that is not epic', () => {
      let mastermind: Mastermind;

      beforeAll(() => {
        mastermind = new Mastermind({
          ...BASE_MASTERMIND,
          id: '31b9bf7f-c139-4566-8ca7-eac1b666b4cc',
          name: 'Test Mastermind',
        });
      });

      it('should create', () => expect(mastermind).toBeTruthy());

      it('should not have "Epic" in the name', () =>
        expect(mastermind.name).not.toMatch(epicRegex));

      it('should have 1 Test Villain in the always leads', () => {
        expect(mastermind.alwaysLeads).toHaveLength(1);
        expect(mastermind.alwaysLeads).toContain(testVillain1);
      });

      it('should not be epic', () => expect(mastermind.isEpic).toBe(false));

      it('should have 5 attack points', () =>
        expect(mastermind.attackPoints).toBe(5));

      it('should have 4 victory points', () =>
        expect(mastermind.victoryPoints).toBe(4));
    });

    describe('that is epic', () => {
      let mastermind: Mastermind;

      beforeAll(() => {
        mastermind = new Mastermind({
          ...BASE_MASTERMIND,
          id: '2e9b13a8-e954-48f4-b1a1-7f7d7aae8db7',
          name: 'Epic Test Mastermind',
        });
      });

      it('should create', () => expect(mastermind).toBeTruthy());

      it('should have "Epic" in the name', () =>
        expect(mastermind.name).toMatch(epicRegex));

      it('should be epic', () => expect(mastermind.isEpic).toBe(true));
    });
  });

  describe('with 2 villains in the always leads', () => {
    let mastermind: Mastermind;

    beforeAll(() => {
      mastermind = new Mastermind({
        ...BASE_MASTERMIND,
        id: '31b9bf7f-c139-4566-8ca7-eac1b666b4cc',
        name: 'Multi villain mastermind',
        alwaysLeads: [testVillain1, testVillain2],
      });
    });

    it('should create', () => expect(mastermind).toBeTruthy());

    it('should have 2 Test Villains in the always leads', () => {
      expect(mastermind.alwaysLeads).toHaveLength(2);
      expect(mastermind.alwaysLeads).toContain(testVillain1);
      expect(mastermind.alwaysLeads).toContain(testVillain2);
    });
  });

  describe('that is empty', () => {
    it('should create', () => expect(Mastermind.empty()).toBeDefined());
  });
});
