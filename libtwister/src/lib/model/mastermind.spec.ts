import legendary from '../data/gameSets/legendary';

import { CardType } from './cardType.enum';
import { IVillainGroup } from './interfaces';
import { Mastermind } from './mastermind';

const epicRegex = new RegExp(`^Epic?`);

const testVillain1: IVillainGroup = {
  gameSet: legendary,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 1',
  cardType: CardType.VILLAINGROUP,
};

const testVillain2: IVillainGroup = {
  gameSet: legendary,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 2',
  cardType: CardType.VILLAINGROUP,
};

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

      it('should have 1 Test Villain in the always leads', async () => {
        expect(mastermind.alwaysLeads).toHaveLength(1);
        expect(mastermind.alwaysLeads).toContain(testVillain1);
      });
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

    it('should have 2 Test Villains in the always leads', async () => {
      expect(mastermind.alwaysLeads).toHaveLength(2);
      expect(mastermind.alwaysLeads).toContain(testVillain1);
      expect(mastermind.alwaysLeads).toContain(testVillain2);
    });
  });
});
