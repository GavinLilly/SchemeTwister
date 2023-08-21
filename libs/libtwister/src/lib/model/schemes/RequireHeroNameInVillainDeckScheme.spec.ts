import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { GAME_SET as LEGENDARY } from '../../data/gameSets/legendary';
import { GAME_SET as MIDNIGHT_SONS } from '../../data/gameSets/midnightSons';
import { MIDNIGHT_MASSACRE } from '../../data/gameSets/midnightSons/midnightSons.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { Hero } from '../cards';
import { IGameSetup } from '../interfaces';

import { RequireHeroNameInVillainDeckScheme } from './RequireHeroNameInVillainDeckScheme';
import { Scheme } from './Scheme';

function isBlade(hero: Hero): boolean {
  return hero.name.toLowerCase().includes('blade');
}

describe('Require Hero Name In Villain Deck Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(MIDNIGHT_SONS, DARK_CITY)
      .withMastermindGamesets(DARK_CITY)
      .withVillainGamesets(DARK_CITY)
      .withHenchmenGamesets(DARK_CITY)
      .build();

    scheme = new RequireHeroNameInVillainDeckScheme(MIDNIGHT_MASSACRE, 'blade');

    setup = scheme.getSetup(2, store.mastermindStore.getOneRandom(), store);
  });

  it('should only include 1 Blade hero', () => {
    expect(setup.villainDeck.heroes).toBeDefined();
    expect(setup.villainDeck.heroes?.filter(isBlade)).toHaveLength(1);
  });

  it('should throw an error when no Blades are available', () => {
    store = new StoreBuilder()
      .withHeroGamesets(LEGENDARY)
      .withMastermindGamesets(LEGENDARY)
      .withVillainGamesets(LEGENDARY)
      .withHenchmenGamesets(LEGENDARY)
      .build();

    expect(() =>
      scheme.getSetup(3, store.mastermindStore.getOneRandom(), store)
    ).toThrow();
  });
});
