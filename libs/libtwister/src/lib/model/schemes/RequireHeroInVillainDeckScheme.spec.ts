/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/heroes';
import { TRANSFORM_CITIZENS_INTO_DEMONS } from '../../data/gameSets/darkCity/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireHeroInVillainDeckScheme } from './RequireHeroInVillainDeckScheme';

describe('Require Hero In Villain Deck Scheme', () => {
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

  it('It should include Jean Grey in the villain deck', async () => {
    const scheme = new RequireHeroInVillainDeckScheme(
      injectGameSet(DARK_CITY.id, TRANSFORM_CITIZENS_INTO_DEMONS),
      JEAN_GREY
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
  });
});
