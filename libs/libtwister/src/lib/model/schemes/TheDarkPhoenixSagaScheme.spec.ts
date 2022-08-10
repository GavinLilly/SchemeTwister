/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import { JEAN_GREY } from '../../data/gameSets/darkCity/heroes';
import XMEN from '../../data/gameSets/xMen';
import { PHOENIX } from '../../data/gameSets/xMen/heroes';
import { THE_DARK_PHOENIX_SAGA } from '../../data/gameSets/xMen/schemes';
import { HELLFIRE_CLUB } from '../../data/gameSets/xMen/villains';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen, IGameSetup } from '../interfaces';

import { Scheme } from './Scheme';
import { TheDarkPhoenixSagaScheme } from './TheDarkPhoenixSagaScheme';

describe('The Dark Phoenix Saga Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;
  let scheme: Scheme;

  beforeAll(() => {
    heroStore = new MultiCardStore(XMEN.heroes);
    villainStore = new MultiCardStore(XMEN.villains!);
    henchmenStore = new MultiCardStore(XMEN.henchmen!);
    mastermindStore = new MultiCardStore(XMEN.masterminds!);
    scheme = new TheDarkPhoenixSagaScheme(
      injectGameSet(XMEN.id, THE_DARK_PHOENIX_SAGA),
      HELLFIRE_CLUB,
      JEAN_GREY,
      PHOENIX
    );
  });

  beforeEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('with X-Men expansion', () => {
    let setup: IGameSetup;
    beforeAll(async () => {
      setup = await scheme.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include Phoenix in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(PHOENIX));

    it('should include Hellfire Club in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(HELLFIRE_CLUB));
  });

  describe('with the Dark City expansion', () => {
    let setup: IGameSetup;
    beforeAll(async () => {
      const dcHeroStore = new MultiCardStore(DARK_CITY.heroes);
      setup = await scheme.getSetup(
        2,
        mastermindStore.getOneRandom(),
        dcHeroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include Jean Grey in the villain deck', () =>
      expect(setup.villainDeck.heroes).toContain(JEAN_GREY));

    it('should include Hellfire Club in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(HELLFIRE_CLUB));
  });
});
