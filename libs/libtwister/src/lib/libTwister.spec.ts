/* eslint-disable @typescript-eslint/no-non-null-assertion */
import isUUID from 'validator/lib/isUUID';

import { GAME_SET as DARK_CITY } from './data/gameSets/darkCity/darkCity.gameset';
import { GAME_SET as INTO_THE_COSMOS } from './data/gameSets/intoTheCosmos/intoTheCosmos.gameset';
import { GAME_SET as LEGENDARY } from './data/gameSets/legendary/legendary.gameset';
import { GAME_SET as MARVEL_STUDIOS } from './data/gameSets/marvelStudios/marvelStudios.gameset';
import { GAME_SET as MCU_GUARDIANS_OF_THE_GALAXY } from './data/gameSets/mcuGuardiansOfTheGalaxy/mcuGuardiansOfTheGalaxy.gameset';
import { EGO_THE_LIVING_PLANET } from './data/gameSets/mcuGuardiansOfTheGalaxy/mcuGuardiansOfTheGalaxy.masterminds';
import { UNLEASH_THE_ABILISK_SPACE_MONSTER } from './data/gameSets/mcuGuardiansOfTheGalaxy/mcuGuardiansOfTheGalaxy.schemes';
import { GAME_SET as XMEN } from './data/gameSets/xMen/xMen.gameset';
import { LibTwister } from './libTwister';
import { GAME_SET_SIZE, NumPlayers } from './model';

expect.extend({
  toBeUUID(received) {
    if (isUUID(received)) {
      return {
        message: () => `ID (${received}) should NOT be a UUID`,
        pass: true,
      };
    }

    return {
      message: () => `ID (${received}) should be a UUID`,
      pass: false,
    };
  },
});

interface CustomMatchers<R = unknown> {
  toBeUUID(): R;
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace jest {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Expect extends CustomMatchers {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface Matchers<R> extends CustomMatchers<R> {}
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface InverseAsymmetricMatchers extends CustomMatchers {}
  }
}

const BIG_BOX_COUNT = 6;
const SMALL_BOX_COUNT = 23;
const MEDIUM_BOX_COUNT = 4;
const CORE_SET_COUNT = 4;
const PROMO_SET_COUNT = 1;
const GAME_SET_COUNT =
  BIG_BOX_COUNT +
  SMALL_BOX_COUNT +
  MEDIUM_BOX_COUNT +
  CORE_SET_COUNT +
  PROMO_SET_COUNT;

describe('LibTwister', () => {
  describe('All game sets', () => {
    it(`should have ${GAME_SET_COUNT} sets`, () =>
      expect(LibTwister.allGameSets.size).toBe(GAME_SET_COUNT));

    it(`should have ${BIG_BOX_COUNT} big boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.large
        )
      ).toHaveLength(BIG_BOX_COUNT));

    it(`should have ${SMALL_BOX_COUNT} small boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.small
        )
      ).toHaveLength(SMALL_BOX_COUNT));

    it(`should have ${MEDIUM_BOX_COUNT} medium boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.medium
        )
      ).toHaveLength(MEDIUM_BOX_COUNT));

    it(`should have ${CORE_SET_COUNT} core sets`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.core
        )
      ).toHaveLength(CORE_SET_COUNT));

    it(`should have ${PROMO_SET_COUNT} promo sets`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.promo
        )
      ).toHaveLength(PROMO_SET_COUNT));

    describe('all cards', () => {
      const allCards = Array.from(LibTwister.allGameSets.values()).flatMap(
        (gameSet) => gameSet.getCards()
      );

      it('should not have any duplicate card IDs', () => {
        const findDupes = (arr: string[]) => {
          const sortedArr = arr.slice().sort();
          const results = [];
          for (let i = 0; i < sortedArr.length - 1; i++) {
            if (sortedArr[i + 1] === sortedArr[i]) results.push(sortedArr[i]);
          }
          return results;
        };

        expect(allCards.length).toBeGreaterThan(0);

        const dupes = findDupes(allCards.map((card) => card.id));
        expect(dupes).toHaveLength(0);
      });

      it('should have valid IDs', () =>
        allCards.forEach((card) => expect(card.id).toBeUUID));
    });
  });

  describe('with 1 game set', () => {
    let twister: LibTwister = new LibTwister([LEGENDARY]);

    beforeEach(() => {
      twister = new LibTwister([LEGENDARY]);
    });

    it('should create', () => expect(twister).toBeTruthy());

    it('should fail with no game sets selected', () =>
      expect(() => new LibTwister([])).toThrow());

    it('should only contain the Legendary game set', () => {
      expect(twister.selectedGameSets).toContain(LEGENDARY);
      expect(twister.selectedGameSets).toHaveLength(1);
    });

    it('should only contain the Legendary game set ID', () => {
      expect(twister.selectedGameSets).toContain(LEGENDARY);
      expect(twister.selectedGameSets).toHaveLength(1);
    });

    it.each([
      ['heroes', 'hero', twister.stores.heroStore, LEGENDARY.heroes],
      [
        'masterminds',
        'mastermind',
        twister.stores.mastermindStore,
        LEGENDARY.masterminds,
      ],
      ['schemes', 'scheme', twister.schemeFactory, LEGENDARY.schemes],
      ['villains', 'villain', twister.stores.villainStore, LEGENDARY.villains],
      [
        'henchmen',
        'henchmen',
        twister.stores.henchmenStore,
        LEGENDARY.henchmen,
      ],
    ])(
      'should contain all of the Legendary %s in the %s store',
      (_cardTypePlural, _cardType, store, cards) =>
        expect(store.allCards).toEqual(cards)
    );

    it.each([2, 3, 4, 5] as NumPlayers[])(
      'should generate a setup with %p players, only using Legendary cards',
      (numPlayers) => {
        const setup = twister.getSetup(numPlayers);

        expect(setup.scheme.gameSet.id).toBe(LEGENDARY.id);
        expect(setup.mastermind.gameSet.id).toBe(LEGENDARY.id);
        expect(
          Array.from(setup.heroDeck.heroes).every(
            (hero) => hero.gameSet.id === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          Array.from(setup.villainDeck.henchmen).every(
            (henchmen) => henchmen.gameSet.id === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          Array.from(setup.villainDeck.villains).every(
            (villain) => villain.gameSet.id === LEGENDARY.id
          )
        ).toBeTruthy();
      }
    );
  });

  describe('with 2 game sets', () => {
    const twister: LibTwister = new LibTwister([LEGENDARY, DARK_CITY]);

    it('should create', () => expect(twister).toBeTruthy());

    describe('selectedGameSets', () => {
      it('should only contain the Legendary and Dark City game sets', () => {
        expect(twister.selectedGameSets).toContain(LEGENDARY);
        expect(twister.selectedGameSets).toContain(DARK_CITY);
        expect(twister.selectedGameSets).toHaveLength(2);
      });

      it('should be sorted by size', () => {
        expect(twister.selectedGameSets[0]).toBe(LEGENDARY);
        expect(twister.selectedGameSets[1]).toBe(DARK_CITY);
      });
    });

    it('should only contain the Legendary and Dark City game set IDs', () => {
      expect(twister.selectedGameSets).toContain(LEGENDARY);
      expect(twister.selectedGameSets).toContain(DARK_CITY);
      expect(twister.selectedGameSets).toHaveLength(2);
    });

    it.each([
      [
        'heroes',
        'hero',
        twister.stores.heroStore,
        LEGENDARY.heroes,
        DARK_CITY.heroes,
      ],
      [
        'masterminds',
        'mastermind',
        twister.stores.mastermindStore,
        LEGENDARY.masterminds,
        DARK_CITY.masterminds,
      ],
      [
        'schemes',
        'scheme',
        twister.schemeFactory,
        LEGENDARY.schemes,
        DARK_CITY.schemes,
      ],
      [
        'villains',
        'villain',
        twister.stores.villainStore,
        LEGENDARY.villains,
        DARK_CITY.villains,
      ],
      [
        'henchmen',
        'henchmen',
        twister.stores.henchmenStore,
        LEGENDARY.henchmen,
        DARK_CITY.henchmen,
      ],
    ])(
      'should contain all of the Legendary & Dark City %s in the %s store',
      (_cardTypePlural, _cardType, store, legCards, dcCards) => {
        const ids = store.allCards.map((card) => card.id);
        expect(ids).toEqual(
          expect.arrayContaining(dcCards!.map((card) => card.id))
        );
        expect(ids).toEqual(
          expect.arrayContaining(legCards!.map((card) => card.id))
        );
        expect(
          store.allCards
            .map((card) => card.gameSet.id)
            .filter((value, index, array) => array.indexOf(value) === index)
        ).toHaveLength(2);
      }
    );
  });

  describe('with MCU Guardians of the Galaxy', () => {
    let twister: LibTwister;

    beforeEach(() => {
      twister = new LibTwister([MARVEL_STUDIOS, MCU_GUARDIANS_OF_THE_GALAXY]);
    });

    it('should create', () => expect(twister).toBeTruthy());

    describe('getSetup()', () => {
      describe('with Ego as mastermind', () => {
        it('should have an additional villain group', () => {
          const setup = twister.getSetup(
            2,
            UNLEASH_THE_ABILISK_SPACE_MONSTER,
            EGO_THE_LIVING_PLANET
          );

          expect(Array.from(setup.villainDeck.villains)).toHaveLength(3);
        });
      });

      describe('with Epic Ego as mastermind', () => {
        it('should have 2 additional villain groups', () => {
          const setup = twister.getSetup(
            2,
            UNLEASH_THE_ABILISK_SPACE_MONSTER,
            EGO_THE_LIVING_PLANET.epic
          );

          expect(Array.from(setup.villainDeck.villains)).toHaveLength(4);
        });
      });

      it('should have Marvel Studios and MCU Guardians of the Galaxy game sets', () => {
        const guardiansId = MCU_GUARDIANS_OF_THE_GALAXY.id;
        const marvelStudiosId = MARVEL_STUDIOS.id;

        const instance = LibTwister.of(guardiansId, marvelStudiosId);
        const ids = instance.selectedGameSets.map((gameSet) => gameSet.id);

        expect(instance.selectedGameSets).toHaveLength(2);
        expect(ids).toContain(guardiansId);
        expect(ids).toContain(marvelStudiosId);
      });
    });
  });

  describe('with no game set IDs', () => {
    it('should create a LibTwister instance with all Game Sets', () =>
      expect(LibTwister.of().selectedGameSets).toHaveLength(GAME_SET_COUNT));
  });

  describe('gameSetIdToGameSet', () => {
    it('should return the Marvel Studios game set', () => {
      const gameSet = LibTwister.gameSetIdsToGameSets(MARVEL_STUDIOS.id);
      expect(gameSet).toBeDefined();
      expect(gameSet?.name).toBe(MARVEL_STUDIOS.name);
    });

    it('should return undefined', () => {
      expect(LibTwister.gameSetIdsToGameSets('')).toBeUndefined();
      expect(LibTwister.gameSetIdsToGameSets('FOOBAR')).toBeUndefined();
    });
  });

  describe('validateGameSetIds', () => {
    it('should return true for a core and medium size game set IDs', () =>
      expect(
        LibTwister.validateGameSetIds([LEGENDARY.id, INTO_THE_COSMOS.id])
      ).toBe(true));

    it('should return true for a single large set', () =>
      expect(LibTwister.validateGameSetIds([XMEN.id])).toBe(true));

    it('should return false for a single medium set', () =>
      expect(LibTwister.validateGameSetIds([INTO_THE_COSMOS.id])).toBe(false));

    it('should return false for a single small set', () =>
      expect(
        LibTwister.validateGameSetIds([MCU_GUARDIANS_OF_THE_GALAXY.id])
      ).toBe(false));

    it('should return false for a non-valid game set id', () =>
      expect(() => LibTwister.validateGameSetIds(['FOOBAR'])).toThrow());

    it('should return false for an empty string game set id', () =>
      expect(() => LibTwister.validateGameSetIds([''])).toThrow());

    it('should return false for an empty game set ID array', () =>
      expect(LibTwister.validateGameSetIds([])).toBe(false));
  });
});
