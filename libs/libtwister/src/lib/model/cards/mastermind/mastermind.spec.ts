import * as uuid from 'uuid';
import { describe, beforeAll, it, expect } from 'vitest';

import { TEST_SERIES_META_1 } from '../../../testData/seriesMeta';
import { IGameSetMeta } from '../../interfaces';
import { CARD_TYPE, GAME_SET_SIZE } from '../../types';
import { Henchmen } from '../henchmen';
import { VillainGroup } from '../villainGroup';

import { Mastermind } from './mastermind';

describe('Mastermind', () => {
  let villain: VillainGroup;
  let gameSet: IGameSetMeta;

  beforeAll(() => {
    gameSet = {
      id: uuid.v4(),
      name: 'Test GameSet',
      releaseYear: 2024,
      series: TEST_SERIES_META_1,
      size: GAME_SET_SIZE.core,
    };

    villain = new VillainGroup({
      id: uuid.v4(),
      gameSet: gameSet,
      name: 'Test Villain',
    });
  });

  describe('with 1 villain as always leads', () => {
    let mastermind: Mastermind;

    beforeAll(() => {
      mastermind = new Mastermind({
        alwaysLeads: [villain],
        attackPoints: 10,
        gameSet: gameSet,
        id: uuid.v4(),
        masterStrike: 'Master-strike',
        name: 'Test Mastermind',
        victoryPoints: 5,
        specialRules: 'Special rules',
        startOfGame: 'Start of game',
        escape: 'Escape',
        finishThePrey: 'Finish him',
        mastermindWins: 'They win',
      });
    });

    it('should create', () => expect(mastermind).toBeTruthy());

    it('should have 1 Test Villain in the always leads', () => {
      expect(mastermind.alwaysLeads).toHaveLength(1);
      expect(mastermind.alwaysLeads).toContain(villain);
    });

    it('should return the master strike', () =>
      expect(mastermind.masterStrike).toBe('Master-strike'));

    it('should return the special rules', () =>
      expect(mastermind.specialRules).toBe('Special rules'));

    it('should return the Mastermind card type', () =>
      expect(mastermind.cardType).toBe(CARD_TYPE.mastermind));

    it('should return the start of game text', () =>
      expect(mastermind.startOfGame).toBe('Start of game'));

    it('should return the escape text', () =>
      expect(mastermind.escape).toBe('Escape'));

    it('should return the "Finish the prey" text', () =>
      expect(mastermind.finishThePrey).toBe('Finish him'));

    it('should return the "Mastermind wins" text', () =>
      expect(mastermind.mastermindWins).toBe('They win'));
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
