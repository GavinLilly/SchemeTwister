import {
  GameSetup,
  RequireCardInDeckScheme,
  RequireCard,
  RequireVillainGroup,
  DECK_TYPE,
  LiteGameSetup,
  StoreOfStores,
  StoreBuilder,
} from '@schemetwister/libtwister';

import { GAME_SET as LEGENDARY } from '../legendary';

import { GAME_SET as PTTR_GAME_SET } from './paintTheTownRed.gameset';
import { CARNAGE } from './paintTheTownRed.masterminds';
import { SPLICE_HUMANS_WITH_SPIDER_DNA } from './paintTheTownRed.schemes';
import { SINISTER_SIX, MAXIMUM_CARNAGE } from './paintTheTownRed.villains';

describe('with Splice Humans with Spider DNA + Carnage', () => {
  let store: StoreOfStores;
  let setup: GameSetup;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(LEGENDARY)
      .withMastermindGamesets(PTTR_GAME_SET)
      .withVillainGamesets(LEGENDARY, PTTR_GAME_SET)
      .withHenchmenGamesets(LEGENDARY)
      .build();
    const scheme = new RequireCardInDeckScheme(
      SPLICE_HUMANS_WITH_SPIDER_DNA,
      new RequireCard(SINISTER_SIX),
      new RequireVillainGroup(),
      DECK_TYPE.villain
    );
    setup = scheme.getSetup({
      numPlayers: 2,
      selectedMastermind: store.mastermindStore.pickOne(CARNAGE),
      store,
    }) as GameSetup;
  });

  describe('getSelectedHeroes()', () => {
    it('should have 5 heroes', () =>
      expect(Array.from(setup.getSelectedHeroes())).toHaveLength(5));

    it('should have 1 henchmen group', () =>
      expect(Array.from(setup.getSelectedHenchmen())).toHaveLength(1));

    it('should have 2 villain groups', () =>
      expect(Array.from(setup.getSelectedVillains())).toHaveLength(2));

    it('should have 1 mastermind', () =>
      expect(Array.from(setup.getSelectedMasterminds())).toHaveLength(1));
  });

  it('should have the Sinister Six as a villain group', () =>
    expect(setup.getSelectedVillains()).toContain(SINISTER_SIX));

  it('should have Maximum Carnage as a villain group', () =>
    expect(setup.getSelectedVillains()).toContain(MAXIMUM_CARNAGE));

  it('should have the same UUID each time', async () => {
    const uuid1 = LiteGameSetup.of(setup).calculateUid();
    const uuid2 = LiteGameSetup.of(setup).calculateUid();

    expect(uuid1).toBe(uuid2);
  });
});
