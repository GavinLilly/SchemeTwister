/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories';
import {
  AbstractMastermind,
  IGameSetup,
  IHenchmen,
  IHero,
  IVillainGroup,
} from '../../../model';
import { GUARDIANS_OF_THE_GALAXY } from '../../teams';
import MARVEL_STUDIOS from '../marvelStudios';

import { STAR_LORDS_AWESOME_MIX_TAPE } from './schemes';

import MCU_GUARDIANS from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

beforeAll(() => {
  heroStore = new MultiCardStore([
    ...MARVEL_STUDIOS.heroes,
    ...MCU_GUARDIANS.heroes,
  ]);
  villainStore = new MultiCardStore([
    ...MARVEL_STUDIOS.villains!,
    ...MCU_GUARDIANS.villains!,
  ]);
  henchmenStore = new MultiCardStore(MARVEL_STUDIOS.henchmen!);
  mastermindStore = new MultiCardStore(MCU_GUARDIANS.masterminds!);
});

describe('Marvel Studios Guardians of the Galaxy schemes', () => {
  afterEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe("Star-Lord's Awesome Mix Tape", () => {
    let setup: IGameSetup;

    beforeEach(async () => {
      setup = await STAR_LORDS_AWESOME_MIX_TAPE.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should have at least 1 Guardians of the Galaxy hero', () =>
      expect(
        setup.heroDeck.heroes.filter(
          (hero) => hero.team === GUARDIANS_OF_THE_GALAXY
        ).length
      ).toBeGreaterThanOrEqual(1));

    it('should have double the number of villains', () =>
      expect(setup.villainDeck.villains).toHaveLength(6));

    it('should have double the number of henchmen', () =>
      expect(setup.villainDeck.henchmen).toHaveLength(2));
  });
});
