import { GAME_SET_SIZE, LibTwister } from '@schemetwister/libtwister';
import isUUID from 'validator/lib/isUUID';

import { marvelVillainsSeries } from './marvelVillains.series';

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

const CORE_SET_COUNT = 1;
const BIG_BOX_COUNT = 0;
const MEDIUM_BOX_COUNT = 0;
const SMALL_BOX_COUNT = 1;
const PROMO_SET_COUNT = 0;
const GAME_SET_COUNT =
  BIG_BOX_COUNT +
  SMALL_BOX_COUNT +
  MEDIUM_BOX_COUNT +
  CORE_SET_COUNT +
  PROMO_SET_COUNT;

describe('Marvel series', () => {
  let libTwister: LibTwister;

  beforeAll(() => {
    libTwister = new LibTwister(marvelVillainsSeries);
  });

  it(`should have ${GAME_SET_COUNT} sets`, () =>
    expect(libTwister.allGameSets.size).toBe(GAME_SET_COUNT));

  it(`should have ${BIG_BOX_COUNT} big boxes`, () =>
    expect(
      Array.from(libTwister.allGameSets.values()).filter(
        (item) => item.size === GAME_SET_SIZE.large
      )
    ).toHaveLength(BIG_BOX_COUNT));

  it(`should have ${SMALL_BOX_COUNT} small boxes`, () =>
    expect(
      Array.from(libTwister.allGameSets.values()).filter(
        (item) => item.size === GAME_SET_SIZE.small
      )
    ).toHaveLength(SMALL_BOX_COUNT));

  it(`should have ${MEDIUM_BOX_COUNT} medium boxes`, () =>
    expect(
      Array.from(libTwister.allGameSets.values()).filter(
        (item) => item.size === GAME_SET_SIZE.medium
      )
    ).toHaveLength(MEDIUM_BOX_COUNT));

  it(`should have ${CORE_SET_COUNT} core sets`, () =>
    expect(
      Array.from(libTwister.allGameSets.values()).filter(
        (item) => item.size === GAME_SET_SIZE.core
      )
    ).toHaveLength(CORE_SET_COUNT));

  it(`should have ${PROMO_SET_COUNT} promo sets`, () =>
    expect(
      Array.from(libTwister.allGameSets.values()).filter(
        (item) => item.size === GAME_SET_SIZE.promo
      )
    ).toHaveLength(PROMO_SET_COUNT));

  describe('all cards', () => {
    const allCards = Array.from(libTwister.allGameSets.values()).flatMap(
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
