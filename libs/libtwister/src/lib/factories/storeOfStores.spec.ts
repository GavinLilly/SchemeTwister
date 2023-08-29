/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { GAME_SET as LEGENDARY } from '../data/gameSets/legendary';
import { DOOMBOT_LEGION } from '../data/gameSets/legendary/legendary.henchmen';
import { HAWKEYE } from '../data/gameSets/legendary/legendary.heroes';
import { LOKI } from '../data/gameSets/legendary/legendary.masterminds';
import { BROTHERHOOD } from '../data/gameSets/legendary/legendary.villains';
import { CARD_TYPE } from '../model';

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
      expect(store.getCardById(LOKI.id, CARD_TYPE.mastermind)).toBe(LOKI));

    it('should return Doombot legion', () =>
      expect(store.getCardById(DOOMBOT_LEGION.id, CARD_TYPE.henchmen)).toBe(
        DOOMBOT_LEGION
      ));

    it('should return Hawkeye', () =>
      expect(store.getCardById(HAWKEYE.id, CARD_TYPE.hero)).toBe(HAWKEYE));

    it('should return Brotherhood', () =>
      expect(store.getCardById(BROTHERHOOD.id, CARD_TYPE.villainGroup)).toBe(
        BROTHERHOOD
      ));

    it('should return undefined for a bystander card', () =>
      expect(store.getCardById('', CARD_TYPE.bystander)).toBeUndefined());

    it('should return undefined for an invalid hero ID', () =>
      expect(store.getCardById('FOOBAR', CARD_TYPE.hero)).toBeUndefined());
  });
});
