import DARK_CITY from '../../data/gameSets/darkCity';
import DEADPOOL from '../../data/gameSets/deadpool';
import { DEADPOOL_KILLS_THE_MARVEL_UNIVERSE } from '../../data/gameSets/deadpool/schemes';
import LEGENDARY from '../../data/gameSets/legendary';
import { StoreBuilder, StoreOfStores } from '../../factories/storeOfStores';
import { injectGameSet } from '../../utils/schemeInjector';
import { IHero, IGameSetup } from '../interfaces';

import { RequireHeroNameInHeroDeckScheme } from './RequireHeroNameInHeroDeckScheme';
import { Scheme } from './Scheme';

function isDeadpool(hero: IHero): boolean {
  return hero.name.toLowerCase().includes('deadpool');
}

describe('Require Hero Name In Hero Deck Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(async () => {
    store = new StoreBuilder()
      .withHeroGamesets(DEADPOOL, LEGENDARY)
      .withMastermindGamesets(DEADPOOL)
      .withVillainGamesets(DEADPOOL)
      .withHenchmenGamesets(LEGENDARY)
      .build();

    scheme = new RequireHeroNameInHeroDeckScheme(
      injectGameSet(DEADPOOL.id, DEADPOOL_KILLS_THE_MARVEL_UNIVERSE),
      'deadpool'
    );

    setup = await scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );
  });

  it('should only include 1 Deadpool hero', () => {
    const deadpoolHeroes = setup.heroDeck.heroes.filter(isDeadpool);

    expect(deadpoolHeroes).toHaveLength(1);
  });

  it('should not have any Deadpool heroes available in the store', () => {
    const deadpoolHeroes = store.heroStore.availableCards.filter(isDeadpool);

    expect(deadpoolHeroes).toHaveLength(0);
  });

  it('should throw an error when no Deadpools are available', async () => {
    store = new StoreBuilder()
      .withHeroGamesets(DARK_CITY)
      .withMastermindGamesets(DEADPOOL)
      .withVillainGamesets(DEADPOOL)
      .withHenchmenGamesets(LEGENDARY)
      .build();

    await expect(
      scheme.getSetup(3, store.mastermindStore.getOneRandom(), store)
    ).rejects.toThrow();
  });
});
