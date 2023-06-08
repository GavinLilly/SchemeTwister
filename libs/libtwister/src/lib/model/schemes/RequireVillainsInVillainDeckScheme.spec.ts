import GUARDIANS from '../../data/gameSets/guardiansOfTheGalaxy';
import { KREE_STARFORCE } from '../../data/gameSets/guardiansOfTheGalaxy/guardiansOfTheGalaxy.villains';
import { THE_KREE_SKRULL_WAR } from '../../data/gameSets/guardiansOfTheGalaxy/schemes';
import LEGENDARY from '../../data/gameSets/legendary';
import { SKRULLS } from '../../data/gameSets/legendary/legendary.villains';
import { SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS } from '../../data/gameSets/legendary/schemes';
import SHIELD from '../../data/gameSets/shield';
import { SHIELD_VS_HYDRA_WAR } from '../../data/gameSets/shield/schemes';
import {
  AIM_HYDRA_OFFSHOOT,
  HYDRA_ELITE,
} from '../../data/gameSets/shield/shield.villains';
import { StoreBuilder, StoreOfStores } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { IGameSetup } from '../interfaces';
import { VillainGroup } from '../villainGroup';

import { RequireVillainsInVillainDeckScheme } from './RequireVillainsInVillainDeckScheme';
import { Scheme } from './Scheme';

describe('Require Villains In Villain Deck Scheme', () => {
  let store: StoreOfStores;

  beforeAll(() => {
    store = new StoreBuilder()
      .withHeroGamesets(LEGENDARY)
      .withMastermindGamesets(LEGENDARY)
      .withVillainGamesets(LEGENDARY, GUARDIANS, SHIELD)
      .withHenchmenGamesets(LEGENDARY)
      .build();
  });

  beforeEach(() => {
    store.reset();
  });

  describe('Secret invastion of the Skurll shapeshifters', () => {
    it('It should include Skrulls in the villain deck', () => {
      const scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(LEGENDARY, SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS),
        SKRULLS
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getOneRandom(),
        store
      );

      expect(setup.villainDeck.villains).toContain(SKRULLS);
    });
  });

  describe('The Kree-Skrull War', () => {
    let scheme: Scheme;
    let setup: IGameSetup;

    beforeEach(() => {
      scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(GUARDIANS, THE_KREE_SKRULL_WAR),
        SKRULLS,
        2,
        false,
        KREE_STARFORCE
      );
      setup = scheme.getSetup(2, store.mastermindStore.getOneRandom(), store);
    });

    it('It should include Skrulls in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(SKRULLS));

    it('It should include Kree Starforce in the villain deck', () =>
      expect(setup.villainDeck.villains).toContain(KREE_STARFORCE));
  });

  describe('S.H.I.E.L.D. vs. HYDRA War', () => {
    let scheme: Scheme;
    let setup: IGameSetup;

    const shieldVillainPredicate = (item: VillainGroup) =>
      [AIM_HYDRA_OFFSHOOT, HYDRA_ELITE].includes(item);

    beforeEach(() => {
      scheme = new RequireVillainsInVillainDeckScheme(
        injectGameSet(SHIELD, SHIELD_VS_HYDRA_WAR),
        HYDRA_ELITE,
        1,
        true,
        AIM_HYDRA_OFFSHOOT
      );
      setup = scheme.getSetup(3, store.mastermindStore.getOneRandom(), store);
    });

    it('should include 1 S.H.I.E.L.D. villain group in the villain deck', () =>
      expect(
        setup.villainDeck.villains.filter(shieldVillainPredicate)
      ).toHaveLength(1));

    it('should remove the chosen and non-chosen villain from the store', () =>
      expect(
        store.villainStore.excludedCards?.filter(shieldVillainPredicate)
      ).toHaveLength(2));
  });
});
