/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import { AbstractMastermind , IHero, IVillainGroup, IHenchmen } from '../../../model';
import { SPIDER_FRIENDS } from '../../teams';
import MARVEL_STUDIOS from '../marvelStudios';

import { DISTRACT_THE_HERO } from './schemes';

import HOMECOMING from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;
beforeAll(() => {
  heroStore = new MultiCardStore([
    ...MARVEL_STUDIOS.heroes,
    ...HOMECOMING.heroes,
  ]);
  villainStore = new MultiCardStore([
    ...MARVEL_STUDIOS.villains!,
    ...HOMECOMING.villains!,
  ]);
  henchmenStore = new MultiCardStore(MARVEL_STUDIOS.henchmen!);
  mastermindStore = new MultiCardStore(HOMECOMING.masterminds!);
});

describe('Spider-Man Homecoming', () => {
  describe('Distract the Hero', () => {
    it('should have at least 1 "Spider Friends" hero in the hero deck', async () => {
      const setup = await DISTRACT_THE_HERO.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(
        setup.heroDeck.heroes.filter((item) => item.team === SPIDER_FRIENDS)
          .length
      ).toBeGreaterThanOrEqual(1);
    });
  });
});
