import {
  AllCardTypes,
  GAME_SET_SIZE,
  ISeries,
  LibTwister,
} from '@schemetwister/libtwister';
import isUUID from 'validator/lib/isUUID';

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

export function seriesTest(
  series: ISeries,
  coreBoxCount: number,
  bigBoxCount = 0,
  mediumBoxCount = 0,
  smallBoxCount = 0,
  promoSetCount = 0
) {
  const totalGameSetCount =
    coreBoxCount + bigBoxCount + mediumBoxCount + smallBoxCount + promoSetCount;

  return describe('Marvel mainline series', () => {
    let libTwister: LibTwister;
    beforeAll(() => {
      libTwister = new LibTwister([series]);
    });

    it(`should have ${totalGameSetCount} sets`, () =>
      expect(libTwister.allGameSets.size).toBe(totalGameSetCount));

    it(`should have ${bigBoxCount} big boxes`, () =>
      expect(
        Array.from(libTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.large
        )
      ).toHaveLength(bigBoxCount));

    it(`should have ${smallBoxCount} small boxes`, () =>
      expect(
        Array.from(libTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.small
        )
      ).toHaveLength(smallBoxCount));

    it(`should have ${mediumBoxCount} medium boxes`, () =>
      expect(
        Array.from(libTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.medium
        )
      ).toHaveLength(mediumBoxCount));

    it(`should have ${coreBoxCount} core sets`, () =>
      expect(
        Array.from(libTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.core
        )
      ).toHaveLength(coreBoxCount));

    it(`should have ${promoSetCount} promo sets`, () =>
      expect(
        Array.from(libTwister.allGameSets.values()).filter(
          (item) => item.size === GAME_SET_SIZE.promo
        )
      ).toHaveLength(promoSetCount));

    describe('all cards', () => {
      let allCards: AllCardTypes[];

      beforeAll(() => {
        allCards = Array.from(libTwister.allGameSets.values()).flatMap(
          (gameSet) => gameSet.getCards()
        );
      });

      it('should not have any duplicate card IDs', () => {
        const findDupes = (arr: string[]) => {
          const sortedArr = arr.slice().sort((a, b) => a.localeCompare(b));
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

    it('should create a LibTwister instance with all Game Sets', () =>
      expect(libTwister.selectedGameSets).toHaveLength(totalGameSetCount));
  });
}

describe('Common tests for Game Sets', () =>
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  test('should be used for implementation', () => {}));
