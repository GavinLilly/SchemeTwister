import { GAME_SET as CHAMPIONS } from '../../data/gameSets/champions';
import { CLASH_OF_THE_MONSTERS_UNLEASHED } from '../../data/gameSets/champions/champions.schemes';
import { MONSTERS_UNLEASHED } from '../../data/gameSets/champions/champions.villains';
import { GAME_SET as LEGENDARY } from '../../data/gameSets/legendary';
import { StoreBuilder, StoreOfStores } from '../../factories';

import { RequireVillainInAdditionalDeckScheme } from './RequireVillainInAdditionalDeckScheme';

describe('Require Villain In Additional Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(CHAMPIONS)
      .withMastermindGamesets(CHAMPIONS)
      .withVillainGamesets(LEGENDARY, CHAMPIONS)
      .withHenchmenGamesets(LEGENDARY)
      .build();
  });

  it('It should include Monsters Unleashed in the additional deck', () => {
    const scheme = new RequireVillainInAdditionalDeckScheme(
      CLASH_OF_THE_MONSTERS_UNLEASHED,
      MONSTERS_UNLEASHED
    );
    const setup = scheme.getSetup(
      2,
      store.mastermindStore.getOneRandom(),
      store
    );

    expect(setup.additionalDeck?.deck.villains).toContain(MONSTERS_UNLEASHED);
  });
});
