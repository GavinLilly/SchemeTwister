import { AbstractMastermind } from './AbstractMastermind';
import { CardType } from './cardType.enum';
import { IVillainGroup } from './interfaces';

const gameSetId = '49260061-be81-41c7-a4c5-c7a12f1903b8';

const epicRegex = new RegExp(`^Epic?`);

const testVillain1: IVillainGroup = {
  gameSetId: gameSetId,
  cardType: CardType.VILLAINGROUP,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 1',
};

const testVillain2: IVillainGroup = {
  gameSetId: gameSetId,
  cardType: CardType.VILLAINGROUP,
  id: 'fb5a07cf-eddd-449d-abf5-06acd070fbdb',
  name: 'Test villain 2',
};

class TestMastermind extends AbstractMastermind {
  public readonly gameSetId = gameSetId;

  constructor(epic = false) {
    super(
      '31b9bf7f-c139-4566-8ca7-eac1b666b4cc',
      'Test Mastermind',
      5,
      4,
      testVillain1,
      epic
    );
  }
}

describe('Abstract Mastermind', () => {
  describe('with 1 villain as always leads', () => {
    describe('that is not epic', () => {
      let mastermind: AbstractMastermind;

      beforeAll(() => {
        mastermind = new TestMastermind();
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
      let mastermind: AbstractMastermind;

      beforeAll(() => {
        mastermind = new TestMastermind(true);
      });

      it('should create', () => expect(mastermind).toBeTruthy());

      it('should have "Epic" in the name', () =>
        expect(mastermind.name).toMatch(epicRegex));
    });
  });

  class TestMastermind2 extends AbstractMastermind {
    public readonly gameSetId = gameSetId;

    constructor() {
      super('31b9bf7f-c139-4566-8ca7-eac1b666b4cc', 'Test Mastermind', 5, 4, [
        testVillain1,
        testVillain2,
      ]);
    }
  }

  describe('with 2 villains in the always leads', () => {
    let mastermind: AbstractMastermind;

    beforeAll(() => {
      mastermind = new TestMastermind2();
    });

    it('should create', () => expect(mastermind).toBeTruthy());

    it('should have 2 Test Villains in the always leads', async () => {
      expect(mastermind.alwaysLeads).toHaveLength(2);
      expect(mastermind.alwaysLeads).toContain(testVillain1);
      expect(mastermind.alwaysLeads).toContain(testVillain2);
    });
  });
});
