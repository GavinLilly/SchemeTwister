/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IGameSetup, IHenchmen, IHero, IVillainGroup } from '../../../model';
import { MERCS_FOR_MONEY } from '../../teams';
import DARK_CITY from '../darkCity';
import LEGENDARY from '../legendary';

import {
  DEADPOOL_KILLS_THE_MARVEL_UNIVERSE,
  EVERYBODY_HATES_DEADPOOL,
} from './schemes';

import DEADPOOL from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

function isDeadpool(hero: IHero): boolean {
  return hero.name.toLowerCase().includes('deadpool');
}

beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...DEADPOOL.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...DEADPOOL.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(DEADPOOL.masterminds!);
});

describe('Deadpool', () => {
  describe('Schemes including Deadpool', () => {
    let setup: IGameSetup;
    beforeAll(async () => {
      [heroStore, villainStore, henchmenStore, mastermindStore].forEach(
        (store) => store.resetStore()
      );

      setup = await DEADPOOL_KILLS_THE_MARVEL_UNIVERSE.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should only include 1 Deadpool hero', () => {
      const deadpoolHeroes = setup.heroDeck.heroes.filter(isDeadpool);

      expect(deadpoolHeroes).toHaveLength(1);
    });

    it('should not have any Deadpool heroes available in the store', () => {
      const deadpoolHeroes = heroStore.availableCards.filter(isDeadpool);

      expect(deadpoolHeroes).toHaveLength(0);
    });

    it('should throw an error when no Deadpools are available', async () => {
      const nonDeadpoolStore = new MultiCardStore(DARK_CITY.heroes);

      await expect(
        DEADPOOL_KILLS_THE_MARVEL_UNIVERSE.getSetup(
          3,
          mastermindStore.getOneRandom(),
          nonDeadpoolStore,
          villainStore,
          henchmenStore,
          mastermindStore
        )
      ).rejects.toThrow();
    });
  });
});

describe('Everybody Hates Deadpool', () => {
  beforeAll(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  it('should have at least 1 Merc for Money hero', async () => {
    const setup = await EVERYBODY_HATES_DEADPOOL.getSetup(
      3,
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
