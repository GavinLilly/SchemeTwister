/* eslint-disable @typescript-eslint/no-non-null-assertion */
import GUARDIANS from '../../data/gameSets/guardiansOfTheGalaxy';
import { THE_KREE_SKRULL_WAR } from '../../data/gameSets/guardiansOfTheGalaxy/schemes';
import { KREE_STARFORCE } from '../../data/gameSets/guardiansOfTheGalaxy/villains';
import LEGENDARY from '../../data/gameSets/legendary';
import { SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS } from '../../data/gameSets/legendary/schemes';
import { SKRULLS } from '../../data/gameSets/legendary/villains';
import SHIELD from '../../data/gameSets/shield';
import { SHIELD_VS_HYDRA_WAR } from '../../data/gameSets/shield/schemes';
import {
  AIM_HYDRA_OFFSHOOT,
  HYDRA_ELITE,
} from '../../data/gameSets/shield/villains';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { IHero, IVillainGroup, IHenchmen, IGameSetup } from '../interfaces';

import { RequireVillainsInVillainDeckScheme } from './RequireVillainsInVillainDeckScheme';
import { Scheme } from './Scheme';

describe('Require Villains In Villain Deck Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(LEGENDARY.heroes);
    villainStore = new MultiCardStore([
      ...LEGENDARY.villains!,
      ...GUARDIANS.villains!,
      ...SHIELD.villains!,
    ]);
    henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
    mastermindStore = new MultiCardStore(LEGENDARY.masterminds!);
  });

  beforeEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Secret invastion of the Skurll shapeshifters', () => {
    it('It should include Skrulls in the villain deck', async () => {
      const scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(
          LEGENDARY.id,
          SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS
        ),
        SKRULLS
      );
      const setup = await scheme.getSetup(
        2,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );

      expect(setup.villainDeck.villains).toContain(SKRULLS);
    });
  });

  describe('The Kree-Skrull War', () => {
    let scheme: Scheme;
    let setup: IGameSetup;

    beforeEach(async () => {
      scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(GUARDIANS.id, THE_KREE_SKRULL_WAR),
        SKRULLS,
        2,
        false,
        KREE_STARFORCE
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

    it('It should include Skrulls in the villain deck', async () =>
      expect(setup.villainDeck.villains).toContain(SKRULLS));

    it('It should include Kree Starforce in the villain deck', async () =>
      expect(setup.villainDeck.villains).toContain(KREE_STARFORCE));
  });

  describe('S.H.I.E.L.D. vs. HYDRA War', () => {
    let scheme: Scheme;
    let setup: IGameSetup;

    const shieldVillainPredicate = (item: IVillainGroup) =>
      [AIM_HYDRA_OFFSHOOT, HYDRA_ELITE].includes(item);

    beforeEach(async () => {
      scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(SHIELD.id, SHIELD_VS_HYDRA_WAR),
        HYDRA_ELITE,
        1,
        true,
        AIM_HYDRA_OFFSHOOT
      );
      setup = await scheme.getSetup(
        3,
        mastermindStore.getOneRandom(),
        heroStore,
        villainStore,
        henchmenStore,
        mastermindStore
      );
    });

    it('should include 1 S.H.I.E.L.D. villain group in the villain deck', () =>
      expect(
        setup.villainDeck.villains.filter(shieldVillainPredicate)
      ).toHaveLength(1));

    it('should remove the chosen and non-chosen villain from the store', () =>
      expect(
        villainStore.excludedCards?.filter(shieldVillainPredicate)
      ).toHaveLength(2));
  });
});
