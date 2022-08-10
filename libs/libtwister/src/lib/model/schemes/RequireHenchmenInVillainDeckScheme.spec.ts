/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import { MAGGIA_GOONS } from '../../data/gameSets/darkCity/henchmen';
import { ORGANIZED_CRIME_WAVE } from '../../data/gameSets/darkCity/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireHenchmenInVillainDeckScheme } from './RequireHenchmenInVillainDeckScheme';

describe('Require Henchmen In Villain Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(DARK_CITY.heroes);
    villainStore = new MultiCardStore(DARK_CITY.villains!);
    henchmenStore = new MultiCardStore(DARK_CITY.henchmen!);
    mastermindStore = new MultiCardStore(DARK_CITY.masterminds!);
  });

  it('It should include Maggia Goons in the villain deck', async () => {
    const scheme = new RequireHenchmenInVillainDeckScheme(
      injectGameSet(DARK_CITY.id, ORGANIZED_CRIME_WAVE),
      MAGGIA_GOONS
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(setup.villainDeck.henchmen).toContain(MAGGIA_GOONS);
  });
});
