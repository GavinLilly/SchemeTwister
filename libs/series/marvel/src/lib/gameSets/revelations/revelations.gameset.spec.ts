import {
  IGameSetup,
  instantiateScheme,
  Scheme,
  StoreBuilder,
  StoreOfStores,
} from '@schemetwister/libtwister';
import { testGameSet } from '@schemetwister/libtwister/testing';
import { beforeAll, describe, expect, it } from 'vitest';

import { X_MEN } from '../../teams';
import { GAME_SET as LEGENDARY } from '../legendary';

import { GAME_SET as REVELATIONS } from './revelations.gameset';
import { SCARLET_WITCH } from './revelations.heroes';
import { HOUSE_OF_M } from './revelations.schemes';

testGameSet({
  gameSet: REVELATIONS,
  numBystanders: 3,
  numHeroes: 9,
  numVillains: 4,
  numHenchmen: 2,
  numMasterminds: 3,
  numSchemes: 4,
});

describe('House of M', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(() => {
    store = new StoreBuilder()
      .withAllFromGamesets(LEGENDARY, REVELATIONS)
      .build();
    scheme = instantiateScheme(HOUSE_OF_M);
    setup = scheme.getSetup({ numPlayers: 2, store });
  });

  it('should have 4 X-Men heroes', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === X_MEN)
    ).toHaveLength(4));

  it('should have 2 non-X-Men heroes', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team !== X_MEN)
    ).toHaveLength(2));

  it('should include Scarlet Witch in the villain deck', () =>
    expect(setup.villainDeck.heroes).toContain(SCARLET_WITCH));
});
