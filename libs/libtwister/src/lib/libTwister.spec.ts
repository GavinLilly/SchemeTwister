/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from './data/gameSets/darkCity';
import LEGENDARY from './data/gameSets/legendary';
import MCU_GUARDIANS_OF_THE_GALAXY from './data/gameSets/mcuGuardiansOfTheGalaxy';
import {
  EGO_THE_LIVING_PLANET,
  EPIC_EGO_THE_LIVING_PLANET,
} from './data/gameSets/mcuGuardiansOfTheGalaxy/masterminds';
import { UNLEASH_THE_ABILISK_SPACE_MONSTER } from './data/gameSets/mcuGuardiansOfTheGalaxy/schemes';
import MARVEL_STUDIOS from './data/gameSets/mcuPhaseOne';
import { LibTwister } from './libTwister';
import {
  CardType,
  GameSetSize,
  ICard,
  NumPlayers,
  SchemeMinusRules,
} from './model';
import { injectGameSet } from './utils/schemeInjector';

const CORE_BOX_SIZE = 3;
const BIG_BOX_SIZE = 6;
const MEDIUM_BOX_SIZE = 3;
const SMALL_BOX_SIZE = 22;
const PROMO_BOX_SIZE = 1;
const TOTAL_SIZE =
  CORE_BOX_SIZE +
  BIG_BOX_SIZE +
  MEDIUM_BOX_SIZE +
  SMALL_BOX_SIZE +
  PROMO_BOX_SIZE;

describe('LibTwister', () => {
  describe('All game sets', () => {
    it(`should have ${TOTAL_SIZE} sets`, () =>
      expect(LibTwister.allGameSets.size).toBe(TOTAL_SIZE));

    it(`should have ${BIG_BOX_SIZE} big boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.LARGE
        )
      ).toHaveLength(BIG_BOX_SIZE));

    it(`should have ${SMALL_BOX_SIZE} small boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.SMALL
        )
      ).toHaveLength(SMALL_BOX_SIZE));

    it(`should have ${MEDIUM_BOX_SIZE} medium boxes`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.MEDIUM
        )
      ).toHaveLength(MEDIUM_BOX_SIZE));

    it(`should have ${CORE_BOX_SIZE} core sets`, () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.CORE
        )
      ).toHaveLength(CORE_BOX_SIZE));

    it('should not have any duplicate card IDs', () => {
      const findDupes = (arr: string[]) => {
        const sortedArr = arr.slice().sort();
        const results = [];
        for (let i = 0; i < sortedArr.length - 1; i++) {
          if (sortedArr[i + 1] === sortedArr[i]) {
            results.push(sortedArr[i]);
          }
        }
        return results;
      };

      const allGamesets = Array.from(LibTwister.allGameSets.values());
      const allCards: ICard[] = [];

      // Iterate over all game sets
      allGamesets.forEach((gameSet) => {
        // Get all card types from the gameset
        for (const cardType of Object.values(CardType)) {
          const cards = gameSet.get(cardType);
          // Push it into our array
          if (cards !== undefined) {
            allCards.push(...cards);
          }
        }
      });

      expect(allCards.length).toBeGreaterThan(0);

      const dupes = findDupes(allCards.map((card) => card.id));
      expect(dupes).toHaveLength(0);
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

    it.each([2, 3, 4, 5])(
      'should generate a setup with %p players, only using Legendary cards',
      async (numPlayers) => {
        const setup = await twister.getSetup(numPlayers as NumPlayers);

        expect(setup?.scheme.gameSetId).toBe(LEGENDARY.id);
        expect(setup?.mastermind.gameSetId).toBe(LEGENDARY.id);
        expect(
          setup?.heroDeck.heroes.every(
            (hero) => hero.gameSetId === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          setup?.villainDeck.henchmen.every(
            (henchmen) => henchmen.gameSetId === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          setup?.villainDeck.villains.every(
            (villain) => villain.gameSetId === LEGENDARY.id
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
        expect(store.allCards).toEqual(expect.arrayContaining(dcCards!));
        expect(store.allCards).toEqual(expect.arrayContaining(legCards!));
        expect(
          store.allCards.every((card) =>
            [LEGENDARY.id, DARK_CITY.id].includes(card.gameSetId)
          )
        ).toBeTruthy();
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
      let unleashScheme: SchemeMinusRules;
      beforeEach(() => {
        unleashScheme = injectGameSet(
          MCU_GUARDIANS_OF_THE_GALAXY.id,
          UNLEASH_THE_ABILISK_SPACE_MONSTER
        );
      });
      describe('with Ego as mastermind', () => {
        it('should have an additional villain group', async () => {
          const setup = await twister.getSetup(
            2,
            unleashScheme,
            EGO_THE_LIVING_PLANET
          );

          expect(setup?.villainDeck.villains).toHaveLength(3);
        });
      });

      describe('with Epic Ego as mastermind', () => {
        it('should have 2 additional villain groups', async () => {
          const setup = await twister.getSetup(
            2,
            unleashScheme,
            EPIC_EGO_THE_LIVING_PLANET
          );

          expect(setup?.villainDeck.villains).toHaveLength(4);
        });
      });
    });
  });
});
