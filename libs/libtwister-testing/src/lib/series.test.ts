import {
  AllCardTypes,
  GAME_SET_SIZE,
  ISeries,
  LibTwister,
} from '@schemetwister/libtwister';
import isUUID from 'validator/lib/isUUID';
import { beforeAll, describe, expect, it, test } from 'vitest';

expect.extend({
  toBeUUID(received) {
    const { isNot } = this;

    return {
      pass: isUUID(received),
      message: () => `${received} is${isNot ? ' not' : ''} a UUID`,
    };
  },
});

interface SeriesTestConfig {
  series: ISeries;
  coreBoxCount: number;
  bigBoxCount?: number;
  mediumBoxCount?: number;
  smallBoxCount?: number;
  promoSetCount?: number;
}

/**
 *
 * @param config
 */
export function testSeries(config: SeriesTestConfig) {
  const series = config.series;
  const coreBoxCount = config.coreBoxCount;
  const bigBoxCount = config.bigBoxCount ?? 0;
  const mediumBoxCount = config.mediumBoxCount ?? 0;
  const smallBoxCount = config.smallBoxCount ?? 0;
  const promoSetCount = config.promoSetCount ?? 0;

  const totalGameSetCount =
    coreBoxCount + bigBoxCount + mediumBoxCount + smallBoxCount + promoSetCount;

  return describe(`${series.seriesMeta.seriesName} Series`, () => {
    let libTwister: LibTwister;
    beforeAll(() => {
      libTwister = new LibTwister({ series: [series] });
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
          const sortedArr = arr.slice().toSorted((a, b) => a.localeCompare(b));
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
