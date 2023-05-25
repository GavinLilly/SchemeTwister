/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from './data/gameSets/darkCity';
import LEGENDARY from './data/gameSets/legendary';
import MARVEL_STUDIOS from './data/gameSets/marvelStudios';
import MCU_GUARDIANS_OF_THE_GALAXY from './data/gameSets/mcuGuardiansOfTheGalaxy';
import {
  EGO_THE_LIVING_PLANET,
  EPIC_EGO_THE_LIVING_PLANET,
} from './data/gameSets/mcuGuardiansOfTheGalaxy/mcuGuardiansOfTheGalaxy.masterminds';
import { UNLEASH_THE_ABILISK_SPACE_MONSTER } from './data/gameSets/mcuGuardiansOfTheGalaxy/schemes';
import { LibTwister } from './libTwister';
import {
  CardType,
  GameSetSize,
  ICard,
  NumPlayers,
  SchemeMinusRules,
} from './model';
import { injectGameSet } from './utils/schemeInjector';

describe('LibTwister', () => {
  describe('All game sets', () => {
    it('should have 34 sets', () =>
      expect(LibTwister.allGameSets.size).toBe(34));

    it('should have 6 big boxes', () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.LARGE
        )
      ).toHaveLength(6));

    it('should have 21 small boxes', () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.SMALL
        )
      ).toHaveLength(21));

    it('should have 3 medium boxes', () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.MEDIUM
        )
      ).toHaveLength(3));

    it('should have 3 core sets', () =>
      expect(
        Array.from(LibTwister.allGameSets.values()).filter(
          (item) => item.size === GameSetSize.CORE
        )
      ).toHaveLength(3));

    it('should not have any duplicate card IDs', () => {
      const findDupes = (arr: string[]) => {
        const sortedArr = arr.slice().sort();
        const results = [];
        for (let i = 0; i < sortedArr.length - 1; i++) {
          if (sortedArr[i + 1] === sortedArr[i]) results.push(sortedArr[i]);
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
      (numPlayers) => {
        const setup = twister.getSetup(numPlayers as NumPlayers);

        expect(setup?.scheme.gameSet.id).toBe(LEGENDARY.id);
        expect(setup?.mastermind.gameSet.id).toBe(LEGENDARY.id);
        expect(
          setup?.heroDeck.heroes.every(
            (hero) => hero.gameSet.id === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          setup?.villainDeck.henchmen.every(
            (henchmen) => henchmen.gameSet.id === LEGENDARY.id
          )
        ).toBeTruthy();
        expect(
          setup?.villainDeck.villains.every(
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
        expect(store.allCards).toEqual(expect.arrayContaining(dcCards!));
        expect(store.allCards).toEqual(expect.arrayContaining(legCards!));
        expect(
          store.allCards.every((card) =>
            [LEGENDARY.id, DARK_CITY.id].includes(card.gameSet.id)
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
          MCU_GUARDIANS_OF_THE_GALAXY,
          UNLEASH_THE_ABILISK_SPACE_MONSTER
        );
      });
      describe('with Ego as mastermind', () => {
        it('should have an additional villain group', () => {
          const setup = twister.getSetup(
            2,
            unleashScheme,
            EGO_THE_LIVING_PLANET
          );

          expect(setup?.villainDeck.villains).toHaveLength(3);
        });
      });

      describe('with Epic Ego as mastermind', () => {
        it('should have 2 additional villain groups', () => {
          const setup = twister.getSetup(
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
