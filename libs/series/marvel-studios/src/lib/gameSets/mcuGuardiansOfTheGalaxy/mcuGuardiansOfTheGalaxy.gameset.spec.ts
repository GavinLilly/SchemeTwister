import { LibTwister } from '@schemetwister/libtwister';
import { testStandardSmallGameSet } from '@schemetwister/libtwister/testing';
import { describe, beforeEach, it, expect } from 'vitest';

import { marvelStudiosSeries } from '../../marvelStudios.series';
import { GAME_SET as MARVEL_STUDIOS } from '../marvelStudios/marvelStudios.gameset';

import { GAME_SET } from './mcuGuardiansOfTheGalaxy.gameset';
import { EGO_THE_LIVING_PLANET } from './mcuGuardiansOfTheGalaxy.masterminds';
import { UNLEASH_THE_ABILISK_SPACE_MONSTER } from './mcuGuardiansOfTheGalaxy.schemes';

testStandardSmallGameSet(GAME_SET);

describe('with MCU Guardians of the Galaxy', () => {
  let twister: LibTwister;

  beforeEach(() => {
    twister = new LibTwister({ series: [marvelStudiosSeries] });
    twister.selectedGameSets = [MARVEL_STUDIOS, GAME_SET];
  });

  it('should create', () => expect(twister).toBeTruthy());

  describe('getSetup()', () => {
    describe('with Ego as mastermind', () => {
      it('should have an additional villain group', () => {
        const setup = twister.getSetup({
          numPlayers: 2,
          scheme: UNLEASH_THE_ABILISK_SPACE_MONSTER,
          mastermind: EGO_THE_LIVING_PLANET,
        });

        expect(Array.from(setup.villainDeck.villains)).toHaveLength(3);
      });
    });

    describe('with Epic Ego as mastermind', () => {
      it('should have 2 additional villain groups', () => {
        const setup = twister.getSetup({
          numPlayers: 2,
          scheme: UNLEASH_THE_ABILISK_SPACE_MONSTER,
          mastermind: EGO_THE_LIVING_PLANET.epic,
        });

        expect(Array.from(setup.villainDeck.villains)).toHaveLength(4);
      });
    });

    it('should have Marvel Studios and MCU Guardians of the Galaxy game sets', () => {
      const guardiansId = GAME_SET.id;
      const marvelStudiosId = MARVEL_STUDIOS.id;

      const ids = twister.selectedGameSets.map((gameSet) => gameSet.id);

      expect(twister.selectedGameSets).toHaveLength(2);
      expect(ids).toContain(guardiansId);
      expect(ids).toContain(marvelStudiosId);
    });
  });
});
