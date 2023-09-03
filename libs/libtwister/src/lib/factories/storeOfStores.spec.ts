/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GAME_SET as LEGENDARY } from '../data/gameSets/legendary';
import { DOOMBOT_LEGION } from '../data/gameSets/legendary/legendary.henchmen';
import { HAWKEYE } from '../data/gameSets/legendary/legendary.heroes';
import { LOKI } from '../data/gameSets/legendary/legendary.masterminds';
import { BROTHERHOOD } from '../data/gameSets/legendary/legendary.villains';

import { StoreOfStores } from './storeOfStores';

describe('StoreOfStores', () => {
  describe('with Legendary game set', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreOfStores(
        LEGENDARY.heroes,
        LEGENDARY.masterminds!,
        LEGENDARY.villains!,
        LEGENDARY.henchmen!
      );
    });

    it('should have more than 0 masterminds', () =>
      expect(store.mastermindStore.allCards.length).toBeGreaterThan(0));

    it('should have more than 0 heroes', () =>
      expect(store.heroStore.allCards.length).toBeGreaterThan(0));

    it('should have more than 0 villains', () =>
      expect(store.villainStore.allCards.length).toBeGreaterThan(0));

    it('should have more than 0 henchmen', () =>
      expect(store.henchmenStore.allCards.length).toBeGreaterThan(0));

    it('should return Loki', () =>
      expect(store.getCardById(LOKI.id)).toBe(LOKI));

    it('should return Doombot legion', () =>
      expect(store.getCardById(DOOMBOT_LEGION.id)).toBe(DOOMBOT_LEGION));

    it('should return Hawkeye', () =>
      expect(store.getCardById(HAWKEYE.id)).toBe(HAWKEYE));

    it('should return Brotherhood', () =>
      expect(store.getCardById(BROTHERHOOD.id)).toBe(BROTHERHOOD));

    it('should throw for an empty ID', () =>
      expect(() => store.getCardById('')).toThrow());

    it('should throw for an invalid ID', () =>
      expect(() => store.getCardById('FOOBAR')).toThrow());
  });
});
