import { FakeGameSetFactory } from '@schemetwister/libtwister/testing/data';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { TEST_REQUIRE_VILLAIN_AND_HERO_SCHEME } from '../../testData/schemes';
import { GameSet } from '../GameSet';
import { IGameSetup } from '../interfaces/gameSetup.interface';
import { GAME_SET_SIZE } from '../types';

import { beforeAll, beforeEach, describe, expect, it } from 'vitest';
import { RequireVillainAndHeroWithBackupInVillainDeckScheme } from './RequireVillainAndHeroWithBackupInVillainDeck.Scheme';
import { Scheme } from './Scheme';
import { RequireCard, RequireCardWithBackup } from './cardInDeck';

describe('RequireVillainAndHeroWithBackupInVillainDeckScheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let gameSet1: GameSet;
  let gameSet2: GameSet;

  beforeAll(() => {
    gameSet1 = new FakeGameSetFactory().createGameSet(GAME_SET_SIZE.core);
    gameSet2 = new FakeGameSetFactory().createGameSet(GAME_SET_SIZE.large);

    scheme = new RequireVillainAndHeroWithBackupInVillainDeckScheme(
      TEST_REQUIRE_VILLAIN_AND_HERO_SCHEME,
      new RequireCard(gameSet1.villains![0]),
      new RequireCardWithBackup(gameSet1.heroes[0], gameSet2.heroes[0])
    );
  });

  beforeEach(() => store.reset());

  describe('with both test game sets', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(gameSet1, gameSet2)
        .build();
      setup = scheme.getSetup({ numPlayers: 2, store });
    });

    it('should include gameSet1.heroes[0] in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(gameSet1.heroes[0]));

    it('should include gameSet1.villains[0] in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(gameSet1.villains![0]));
  });

  describe('with only test game set 1 for heroes and villains', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      const gameSet2HeroStore = new StoreBuilder()
        .withHeroGamesets(gameSet2)
        .withMastermindGamesets(gameSet1, gameSet2)
        .withVillainGamesets(gameSet1, gameSet2)
        .withHenchmenGamesets(gameSet1, gameSet2)
        .build();
      setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: gameSet2HeroStore.mastermindStore.getRandom(),
        store: gameSet2HeroStore,
      });
    });

    it('should include gameSet2.heroes[0] in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(gameSet2.heroes[0]));

    it('should include gameSet1.villains[0] in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(gameSet1.villains![0]));
  });
});
