import { beforeAll, describe, expect, it } from 'vitest';

import { MockCardFactory } from '../mocks';
import { StoreOfStores } from './storeOfStores';

const MOCK_CARD_FACTORY = new MockCardFactory();
const TEST_HENCHMEN_1 = MOCK_CARD_FACTORY.createHenchmen();
const TEST_HERO_1 = MOCK_CARD_FACTORY.createHero();
const TEST_MASTERMIND_1 = MOCK_CARD_FACTORY.createMastermind();
const TEST_VILLAIN_1 = MOCK_CARD_FACTORY.createVillainGroup();

describe('StoreOfStores', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreOfStores(
      [TEST_HERO_1],
      [TEST_MASTERMIND_1],
      [TEST_VILLAIN_1],
      [TEST_HENCHMEN_1]
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
    expect(store.getCardById(TEST_MASTERMIND_1.id)).toBe(TEST_MASTERMIND_1));

  it('should return Doombot legion', () =>
    expect(store.getCardById(TEST_HENCHMEN_1.id)).toBe(TEST_HENCHMEN_1));

  it('should return Hawkeye', () =>
    expect(store.getCardById(TEST_HERO_1.id)).toBe(TEST_HERO_1));

  it('should return Brotherhood', () =>
    expect(store.getCardById(TEST_VILLAIN_1.id)).toBe(TEST_VILLAIN_1));

  it('should throw for an empty ID', () =>
    expect(() => store.getCardById('')).toThrow());

  it('should throw for an invalid ID', () =>
    expect(() => store.getCardById('FOOBAR')).toThrow());

  it('should return undefined for an invalid UUID', () =>
    expect(
      store.getCardById('5e982c7e-6926-4d79-8435-82b5667057b6')
    ).toBeUndefined());
});
