/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Teams } from '../../data';
import DARK_CITY from '../../data/gameSets/darkCity';
import REVELATIONS from '../../data/gameSets/revelations';
import { SCARLET_WITCH } from '../../data/gameSets/revelations/heroes';
import { HOUSE_OF_M } from '../../data/gameSets/revelations/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen, IGameSetup } from '../interfaces';

import { HouseOfMScheme } from './HouseOfMScheme';
import { Scheme } from './Scheme';

describe('House of M Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(async () => {
    heroStore = new MultiCardStore([
      ...DARK_CITY.heroes,
      ...REVELATIONS.heroes,
    ]);
    villainStore = new MultiCardStore([
      ...DARK_CITY.villains!,
      ...REVELATIONS.villains!,
    ]);
    henchmenStore = new MultiCardStore(DARK_CITY.henchmen!);
    mastermindStore = new MultiCardStore(DARK_CITY.masterminds!);

    scheme = new HouseOfMScheme(
      injectGameSet(REVELATIONS.id, HOUSE_OF_M),
      SCARLET_WITCH
    );

    setup = await scheme.getSetup(
      2,
      mastermindStore.getOneRandom(),
      heroStore,
      villainStore,
      henchmenStore,
      mastermindStore
    );
  });

  it('should include Scarlet Witch in the villain deck', () =>
    expect(setup.villainDeck.heroes).toContain(SCARLET_WITCH));

  it('should include 4 X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team === Teams.X_MEN)
    ).toHaveLength(4));

  it('should include 2 non-X-Men heroes in the hero deck', () =>
    expect(
      setup.heroDeck.heroes.filter((hero) => hero.team !== Teams.X_MEN)
    ).toHaveLength(2));
});
