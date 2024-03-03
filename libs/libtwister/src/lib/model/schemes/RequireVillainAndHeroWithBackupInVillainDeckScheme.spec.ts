import { StoreBuilder, StoreOfStores } from '../../factories';
import { TEST_GAME_SET_1, TEST_GAME_SET_2 } from '../../testData/gameSets';
import { TEST_HERO_1, TEST_HERO_2 } from '../../testData/heroes';
import { TEST_REQUIRE_VILLAIN_AND_HERO_SCHEME } from '../../testData/schemes';
import { TEST_VILLAIN_1, TEST_VILLAIN_5 } from '../../testData/villains';
import { IGameSetup } from '../interfaces/gameSetup.interface';

import { RequireVillainAndHeroWithBackupInVillainDeckScheme } from './RequireVillainAndHeroWithBackupInVillainDeck.Scheme';
import { Scheme } from './Scheme';
import { RequireCard, RequireCardWithBackup } from './cardInDeck';

describe('The Dark Phoenix Saga Scheme', () => {
  let store: StoreOfStores;
  let scheme: Scheme;

  beforeAll(() => {
    store = new StoreBuilder().withAllFromGamesets(TEST_GAME_SET_2).build();
    scheme = new RequireVillainAndHeroWithBackupInVillainDeckScheme(
      TEST_REQUIRE_VILLAIN_AND_HERO_SCHEME,
      new RequireCard(TEST_VILLAIN_5),
      new RequireCardWithBackup(TEST_HERO_2, TEST_HERO_1)
    );
  });

  beforeEach(() => store.reset());

  describe('with X-Men expansion', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      setup = scheme.getSetup({ numPlayers: 2, store });
    });

    it('should include TEST_HERO_2 in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(TEST_HERO_2));

    it('should include TEST_VILLAIN_1 in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(TEST_VILLAIN_1));
  });

  describe('with the Dark City expansion', () => {
    let setup: IGameSetup;
    beforeAll(() => {
      const dcHeroStore = new StoreBuilder()
        .withHeroGamesets(TEST_GAME_SET_1)
        .withMastermindGamesets(TEST_GAME_SET_2)
        .withVillainGamesets(TEST_GAME_SET_2)
        .withHenchmenGamesets(TEST_GAME_SET_2)
        .build();
      setup = scheme.getSetup({
        numPlayers: 2,
        selectedMastermind: dcHeroStore.mastermindStore.getRandom(),
        store: dcHeroStore,
      });
    });

    it('should include TEST_HERO_1 in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(TEST_HERO_1));

    it('should include TEST_VILLAIN_1 in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(TEST_VILLAIN_1));
  });
});
