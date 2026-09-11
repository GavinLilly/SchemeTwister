import { beforeAll, beforeEach, describe, expect, it } from 'vitest';

import { MockCardFactory } from '../../mocks/mock-card.factory';
import { MockGameSetFactory } from '../../mocks/mock-game-set.factory';
import { StoreBuilder } from '../../stores/store-builder';
import { StoreOfStores } from '../../stores/store-of-stores';
import { GAME_SET_SIZE } from '../constants/game-set-size.const';
import { GameSet } from '../game-set';
import { GameSetup } from '../interfaces/game-setup.interface';

import { RequireCardWithBackup } from './cardInDeck/require-card-with-backup.behaviour';
import { RequireCard } from './cardInDeck/require-card.behaviour';
import { RequireVillainAndHeroWithBackupInVillainDeckScheme } from './require-villain-and-hero-with-backup-in-villain-deck.scheme';
import { Scheme } from './scheme';

describe('RequireVillainAndHeroWithBackupInVillainDeckScheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;
  let gameSet1: GameSet;
  let gameSet2: GameSet;

  beforeAll(() => {
    gameSet1 = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.core);
    gameSet2 = new MockGameSetFactory().createGameSet(GAME_SET_SIZE.large);

    const schemeDefinition = new MockCardFactory().createSchemeDefinition();

    scheme = new RequireVillainAndHeroWithBackupInVillainDeckScheme(
      schemeDefinition,
      new RequireCard(gameSet1.villains![0]),
      new RequireCardWithBackup(gameSet1.heroes[0], gameSet2.heroes[0])
    );
  });

  beforeEach(() => store.reset());

  describe('with both test game sets', () => {
    let setup: GameSetup;
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
    let setup: GameSetup;
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
