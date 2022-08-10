/* eslint-disable @typescript-eslint/no-non-null-assertion */
import CHAMPIONS from '../../data/gameSets/champions';
import { CLASH_OF_THE_MONSTERS_UNLEASHED } from '../../data/gameSets/champions/schemes';
import { MONSTERS_UNLEASHED } from '../../data/gameSets/champions/villains';
import LEGENDARY from '../../data/gameSets/legendary';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireVillainInAdditionalDeckScheme } from './RequireVillainInAdditionalDeckScheme';

describe('Require Villain In Additional Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(CHAMPIONS.heroes);
    villainStore = new MultiCardStore([
      ...LEGENDARY.villains!,
      ...CHAMPIONS.villains!,
    ]);
    henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
    mastermindStore = new MultiCardStore(CHAMPIONS.masterminds!);
  });

  it('It should include Monsters Unleashed in the additional deck', async () => {
    const scheme = new RequireVillainInAdditionalDeckScheme(
      injectGameSet(CHAMPIONS.id, CLASH_OF_THE_MONSTERS_UNLEASHED),
      MONSTERS_UNLEASHED
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(setup.additionalDeck?.deck.villains).toContain(MONSTERS_UNLEASHED);
  });
});
