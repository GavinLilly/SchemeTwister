/* eslint-disable @typescript-eslint/no-non-null-assertion */
import DARK_CITY from '../../data/gameSets/darkCity';
import DEADPOOL from '../../data/gameSets/deadpool';
import { DEADPOOL_KILLS_THE_MARVEL_UNIVERSE } from '../../data/gameSets/deadpool/schemes';
import LEGENDARY from '../../data/gameSets/legendary';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen, IGameSetup } from '../interfaces';

import { RequireHeroNameInHeroDeckScheme } from './RequireHeroNameInHeroDeckScheme';
import { Scheme } from './Scheme';

function isDeadpool(hero: IHero): boolean {
  return hero.name.toLowerCase().includes('deadpool');
}

describe('Require Hero Name In Hero Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;
  let scheme: Scheme;
  let setup: IGameSetup;

  beforeAll(async () => {
    heroStore = new MultiCardStore([...DEADPOOL.heroes, ...LEGENDARY.heroes]);
    villainStore = new MultiCardStore(DEADPOOL.villains!);
    henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
    mastermindStore = new MultiCardStore(DEADPOOL.masterminds!);
    scheme = new RequireHeroNameInHeroDeckScheme(
      injectGameSet(DEADPOOL.id, DEADPOOL_KILLS_THE_MARVEL_UNIVERSE),
      'deadpool'
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
      scheme.getSetup(
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
