import { beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { TEST_MASTERMIND_1, TEST_MASTERMIND_2 } from '../testData/masterminds';

import { MastermindStore } from './mastermindStore';

describe('MastermindStore', () => {
  let store: MastermindStore;

  beforeAll(() => {
    store = new MastermindStore([TEST_MASTERMIND_2]);
  });

  beforeEach(() => {
    store.resetStore();
  });

  describe('getRandom', () => {
    it("should pick the standard Mastermind or it's epic version", () =>
      expect([TEST_MASTERMIND_2.id, TEST_MASTERMIND_2.epic.id]).toContain(
        store.getRandom().id
      ));
  });

  describe('pickOne', () => {
    it('should return the requested mastermind based on the passed in mastermind', () =>
      expect(store.pickOne(TEST_MASTERMIND_2)).toEqual(TEST_MASTERMIND_2));

    it('should return the requested mastermind based on the passed in ID', () =>
      expect(store.pickOne(TEST_MASTERMIND_2.id)).toEqual(TEST_MASTERMIND_2));

    it('should return the standard card if searching based on the epic card', () =>
      expect(store.pickOne(TEST_MASTERMIND_2.epic)).toEqual(TEST_MASTERMIND_2));

    it('should return the standard card if searching based on the epic card ID', () =>
      expect(store.pickOne(TEST_MASTERMIND_2.epic.id)).toEqual(
        TEST_MASTERMIND_2
      ));

    it('should throw an error when the UUID is not found', () =>
      expect(() =>
        store.pickOne('7dc407f8-8ebe-4638-9b90-0f61fcb33ff5')
      ).toThrowError());
  });

  describe('removeCard', () => {
    let largerStore: MastermindStore;

    beforeAll(() => {
      largerStore = new MastermindStore([TEST_MASTERMIND_1, TEST_MASTERMIND_2]);
    });

    beforeEach(() => {
      largerStore.resetStore();
    });

    it('should remove the standard card if provided with a standard card', () => {
      store.removeCard(TEST_MASTERMIND_2);

      expect(store.availableCards).not.toContain(TEST_MASTERMIND_2);
    });

    it('should remove the standard card if provided with a standard card ID', () => {
      store.removeCard(TEST_MASTERMIND_2.id);

      expect(store.availableCards).not.toContain(TEST_MASTERMIND_2);
    });

    it('should remove the standard card if provided with an epic card', () => {
      store.removeCard(TEST_MASTERMIND_2.epic);

      expect(store.availableCards).not.toContain(TEST_MASTERMIND_2);
    });

    it('should remove the standard card if provided with an epic card ID', () => {
      store.removeCard(TEST_MASTERMIND_2.epic.id);

      expect(store.availableCards).not.toContain(TEST_MASTERMIND_2);
    });
  });

  describe('get', () => {
    let largerStore: MastermindStore;

    beforeAll(() => {
      largerStore = new MastermindStore([TEST_MASTERMIND_1, TEST_MASTERMIND_2]);
    });

    beforeEach(() => {
      largerStore.resetStore();
    });

    it('should get the TEST_MASTERMIND_2 using the standard card ID', () => {
      expect(largerStore.get(TEST_MASTERMIND_2.id)).toEqual(TEST_MASTERMIND_2);
      expect(largerStore.get([TEST_MASTERMIND_2.id])).toEqual(
        TEST_MASTERMIND_2
      );
    });

    it('should get the TEST_MASTERMIND_2 using the epic card ID', () => {
      expect(largerStore.get(TEST_MASTERMIND_2.epic.id)).toEqual(
        TEST_MASTERMIND_2
      );
      expect(largerStore.get([TEST_MASTERMIND_2.epic.id])).toEqual(
        TEST_MASTERMIND_2
      );
    });

    it('should get an array of cards', () =>
      expect(
        largerStore.get([TEST_MASTERMIND_2.id, TEST_MASTERMIND_1.id])
      ).toEqual(
        expect.arrayContaining([TEST_MASTERMIND_1, TEST_MASTERMIND_2])
      ));
  });
});
