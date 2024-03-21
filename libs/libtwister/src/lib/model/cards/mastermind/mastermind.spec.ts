import * as uuid from 'uuid';

import { IGameSetMeta } from '../../interfaces';
import { GAME_SET_SIZE, SERIES } from '../../types';
import { Henchmen } from '../henchmen';
import { VillainGroup } from '../villainGroup';

import { MastermindWithEpic } from './epicMastermind';
import { Mastermind } from './mastermind';

const epicRegex = new RegExp(`^Epic?`);

describe('Mastermind', () => {
  let villain: VillainGroup;
  let gameSet: IGameSetMeta;

  beforeAll(() => {
    gameSet = {
      id: uuid.v4(),
      name: 'Test GameSet',
      releaseYear: 2024,
      series: SERIES.mainline,
      size: GAME_SET_SIZE.core,
    };

    villain = new VillainGroup({
      id: uuid.v4(),
      gameSet: gameSet,
      name: 'Test Villain',
    });
  });

  describe('with 1 villain as always leads', () => {
    let mastermind: MastermindWithEpic;

    beforeAll(() => {
      mastermind = new MastermindWithEpic(
        {
          alwaysLeads: [villain],
          attackPoints: 10,
          gameSet: gameSet,
          id: uuid.v4(),
          masterStrike: '',
          name: 'Test Mastermind',
          victoryPoints: 5,
        },
        {
          id: uuid.v4(),
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
    });
  });

  describe('with 2 villains in the always leads', () => {
    let mastermind: Mastermind;
    let villain2: VillainGroup;

    beforeAll(() => {
      villain2 = new VillainGroup({
        gameSet: gameSet,
        id: uuid.v4(),
        name: 'Villain 2',
      });

      mastermind = new Mastermind({
        alwaysLeads: [villain, villain2],
        attackPoints: 5,
        gameSet: gameSet,
        id: uuid.v4(),
        masterStrike: '',
        name: 'Mastermind 2',
        victoryPoints: 4,
      });
    });
    it('should create', () => expect(mastermind).toBeTruthy());

    it('should have 2 Test Villains in the always leads', () => {
      expect(mastermind.alwaysLeads).toHaveLength(2);
      expect(mastermind.alwaysLeads).toContain(villain);
      expect(mastermind.alwaysLeads).toContain(villain2);
    });
  });

  describe('with 1 villain and 1 henchmen in the always leads', () => {
    let mastermind: Mastermind;
    let henchmen: Henchmen;

    beforeAll(() => {
      henchmen = new Henchmen({
        gameSet: gameSet,
        id: uuid.v4(),
        name: 'Henchmen',
        attackPoints: 2,
        fight: '',
      });

      mastermind = new Mastermind({
        alwaysLeads: [villain, henchmen],
        attackPoints: 5,
        gameSet: gameSet,
        id: uuid.v4(),
        masterStrike: '',
        name: 'Mastermind 2',
        victoryPoints: 4,
      });
    });
    it('should create', () => expect(mastermind).toBeTruthy());

    it('should have 2 Test Villains in the always leads', () => {
      expect(mastermind.alwaysLeads).toHaveLength(2);
      expect(mastermind.alwaysLeads).toContain(villain);
      expect(mastermind.alwaysLeads).toContain(henchmen);
    });
  });

  describe('that is empty', () => {
    it('should create', () => expect(Mastermind.empty()).toBeDefined());
  });
});
