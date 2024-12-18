import * as uuid from 'uuid';
import { beforeAll, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../factories';
import { GameSetMock } from '../../testData/gameSetMock';
import { Hero } from '../cards';
import { GAME_SET_SIZE } from '../types';

import { RequireUniqueHeroesScheme } from './RequireUniqueHeroes.scheme';
import { Scheme } from './Scheme';

describe('RequireUniqueHeroesScheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  const gameSet = new GameSetMock(GAME_SET_SIZE.core).getGameSet();

  beforeAll(() => {
    store = new StoreBuilder().withAllFromGamesets(gameSet).build();

    if (gameSet.schemes !== undefined && gameSet.schemes.length > 0) {
      scheme = new RequireUniqueHeroesScheme(gameSet.schemes[0]);
    }
  });

  it('should not have any duplicated cards', () => {
    const setup = scheme.getSetup({ numPlayers: 2, store });

    expect(setup.heroDeck.heroes).toHaveLength(
      new Set(setup.heroDeck.heroes).size
    );
  });

  it('should default back to including duplicates if 10 iterations are reached', () => {
    const heroes: Hero[] = [];

    for (let i = 0; i < 7; i++) {
      const loganHero = new Hero({ id: uuid.v4(), name: 'Logan', gameSet });
      heroes.push(loganHero);
    }

    const randomHero = new Hero({
      id: uuid.v4(),
      name: 'Hero',
      gameSet,
    });
    heroes.push(randomHero);

    const localStore = new StoreOfStores(
      heroes,
      store.mastermindStore.allCards,
      store.villainStore.allCards,
      store.henchmenStore.allCards
    );

    const setup = scheme.getSetup({ numPlayers: 2, store: localStore });
    expect(setup.heroDeck.heroes).toHaveLength(
      scheme.rules[2].heroDeck.numHeroes
    );

    const heroNames = setup.heroDeck.heroes.map((hero) => hero.name);
    const uniqueHeroNames = new Set(heroNames);

    expect(heroNames).not.toHaveLength(uniqueHeroNames.size);
  });
});
