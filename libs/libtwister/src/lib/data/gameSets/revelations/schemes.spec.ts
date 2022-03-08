/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen, IGameSetup } from '../../../model';
import { X_MEN } from '../../teams';
import LEGENDARY from '../legendary';

import { HOUSE_OF_M } from './schemes';

import REVELATIONS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...REVELATIONS.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...REVELATIONS.villains!,
  ]);
  henchmenStore = new MultiCardStore(REVELATIONS.henchmen!);
  mastermindStore = new MultiCardStore(REVELATIONS.masterminds!);
});

describe('Revelations', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('House of M', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      setup = await HOUSE_OF_M.getSetup(
        5,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include 4 X-Men heroes', () =>
      expect(
        setup.heroDeck.heroes.filter((hero) => hero.team === X_MEN)
      ).toHaveLength(4));

    it('should include 2 non-X-Men heroes', () =>
      expect(
        setup.heroDeck.heroes.filter((hero) => hero.team !== X_MEN)
      ).toHaveLength(2));
  });
});
