/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import DEADPOOL from '../../data/gameSets/deadpool';
import { EVERYBODY_HATES_DEADPOOL } from '../../data/gameSets/deadpool/schemes';
import { MERCS_FOR_MONEY } from '../../data/teams';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';

import { RequireTeamInHeroDeckScheme } from './RequireTeamInHeroDeckScheme';

describe('Require Team In Hero Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(DEADPOOL.heroes);
    villainStore = new MultiCardStore(DARK_CITY.villains!);
    henchmenStore = new MultiCardStore(DARK_CITY.henchmen!);
    mastermindStore = new MultiCardStore(DARK_CITY.masterminds!);
  });

  it('should have at least 1 Merc for Money hero', async () => {
    const scheme = new RequireTeamInHeroDeckScheme(
      injectGameSet(DARK_CITY.id, EVERYBODY_HATES_DEADPOOL),
      MERCS_FOR_MONEY
    );
    const setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );

    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === MERCS_FOR_MONEY)
        .length
    ).toBeGreaterThanOrEqual(1);
  });
});
