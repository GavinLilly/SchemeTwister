import { GAME_SET as DARK_CITY } from '../../data/gameSets/darkCity';
import { GAME_SET as WWHULK } from '../../data/gameSets/worldWarHulk';
import { MUTATING_GAMMA_RAYS } from '../../data/gameSets/worldWarHulk/worldWarHulk.schemes';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { Hero } from '../cards';
import { IGameSetup } from '../interfaces';

import { RequireHeroNameInAdditionalDeckScheme } from './RequireHeroNameInAdditionalDeckScheme';
import { Scheme } from './Scheme';

function isHulk(hero: Hero): boolean {
  return hero.name.toLowerCase().includes('hulk');
}

describe('Require Hero Name in Additional Deck Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(() => {
    store = new StoreBuilder().withSingleGameset(WWHULK).build();

    scheme = new RequireHeroNameInAdditionalDeckScheme(
      MUTATING_GAMMA_RAYS,
      'hulk'
    );

    setup = scheme.getSetup(2, store.mastermindStore.getOneRandom(), store);
  });

  it('should include 1 "Hulk" hero in the additional deck', () => {
    const hulkHeroes = setup.additionalDeck?.deck.heroes?.filter(isHulk);

    expect(hulkHeroes).toHaveLength(1);
  });

  it('should throw an error when no Hulks are available', () => {
    store = new StoreBuilder()
      .withHeroGamesets(DARK_CITY)
      .withMastermindGamesets(WWHULK)
      .withVillainGamesets(WWHULK)
      .withHenchmenGamesets(WWHULK)
      .build();

    expect(() =>
      scheme.getSetup(3, store.mastermindStore.getOneRandom(), store)
    ).toThrow();
  });
});
