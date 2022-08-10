/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import INTO_THE_COSMOS from '../../data/gameSets/intoTheCosmos';
import { ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/heroes';
import { TURN_THE_SOUL_OF_ADAM_WARLOCK } from '../../data/gameSets/intoTheCosmos/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireHeroInAdditionalDeckScheme } from './RequireHeroInAdditionalDeckScheme';

describe('Require Hero In Additional Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore([
      ...DARK_CITY.heroes,
      ...INTO_THE_COSMOS.heroes,
    ]);
    villainStore = new MultiCardStore([
      ...DARK_CITY.villains!,
      ...INTO_THE_COSMOS.villains!,
    ]);
    henchmenStore = new MultiCardStore(DARK_CITY.henchmen!);
    mastermindStore = new MultiCardStore(DARK_CITY.masterminds!);
  });

  it('It should include Adam Warlock in the additional deck', async () => {
    const scheme = new RequireHeroInAdditionalDeckScheme(
      injectGameSet(DARK_CITY.id, TURN_THE_SOUL_OF_ADAM_WARLOCK),
      ADAM_WARLOCK
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(setup.additionalDeck?.deck.heroes).toContain(ADAM_WARLOCK);
  });
});
