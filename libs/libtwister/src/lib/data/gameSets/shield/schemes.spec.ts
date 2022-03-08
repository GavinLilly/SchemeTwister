/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { MultiCardStore } from '../../../factories/multiCardStore';
import {
  AbstractMastermind,
  IHero,
  IHenchmen,
  IGameSetup,
 IVillainGroup } from '../../../model';
import LEGENDARY from '../legendary';

import { SHIELD_VS_HYDRA_WAR } from './schemes';
import { AIM_HYDRA_OFFSHOOT, HYDRA_ELITE } from './villains';

import SHIELD from './index';

let heroStore: MultiCardStore<IHero>;
let villainStore: MultiCardStore<IVillainGroup>;
let henchmenStore: MultiCardStore<IHenchmen>;
let mastermindStore: MultiCardStore<AbstractMastermind>;

const shieldVillainPredicate = (item: IVillainGroup) =>
  [AIM_HYDRA_OFFSHOOT, HYDRA_ELITE].includes(item);

beforeAll(() => {
  heroStore = new MultiCardStore([...LEGENDARY.heroes, ...SHIELD.heroes]);
  villainStore = new MultiCardStore([
    ...LEGENDARY.villains!,
    ...SHIELD.villains!,
  ]);
  henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
  mastermindStore = new MultiCardStore(SHIELD.masterminds!);
});

describe('S.H.I.E.L.D.', () => {
  describe('S.H.I.E.L.D. vs. HYDRA War', () => {
    let setup: IGameSetup;

    beforeAll(async () => {
      setup = await SHIELD_VS_HYDRA_WAR.getSetup(
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
