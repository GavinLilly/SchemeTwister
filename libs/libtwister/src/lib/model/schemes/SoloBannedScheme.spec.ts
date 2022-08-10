/* eslint-disable @typescript-eslint/no-non-null-assertion */
import LEGENDARY from '../../data/gameSets/legendary';
import { NEGATIVE_ZONE_PRISON_BREAKOUT } from '../../data/gameSets/legendary/schemes';
import { MultiCardStore } from '../../factories';
import { injectGameSet } from '../../utils/schemeInjector';
import { AbstractMastermind } from '../AbstractMastermind';
import { SinglePlayerError } from '../errors';
import { IHero, IVillainGroup, IHenchmen } from '../interfaces';
import { NumPlayers } from '../types';

import { SoloBannedScheme } from './SoloBannedScheme';

describe('Solo Banned Scheme', () => {
  let heroStore: MultiCardStore<IHero>;
  let villainStore: MultiCardStore<IVillainGroup>;
  let henchmenStore: MultiCardStore<IHenchmen>;
  let mastermindStore: MultiCardStore<AbstractMastermind>;

  beforeAll(() => {
    heroStore = new MultiCardStore(LEGENDARY.heroes);
    villainStore = new MultiCardStore(LEGENDARY.villains!);
    henchmenStore = new MultiCardStore(LEGENDARY.henchmen!);
    mastermindStore = new MultiCardStore(LEGENDARY.masterminds!);
  });

  beforeEach(() => {
    [heroStore, villainStore, henchmenStore, mastermindStore].forEach((store) =>
      store.resetStore()
    );
  });

  describe('Negative Zone Prison Breakout', () => {
    beforeEach(async () => {
      [heroStore, villainStore, henchmenStore, mastermindStore].forEach(
        (store) => store.resetStore()
      );
    });

    it('should throw an error for 1 player', async () => {
      expect.assertions(1);

      const scheme = new SoloBannedScheme(
        injectGameSet(LEGENDARY.id, NEGATIVE_ZONE_PRISON_BREAKOUT)
      );
      try {
        await scheme.getSetup(
          1,
          mastermindStore.getOneRandom(),
          heroStore,
          villainStore,
          henchmenStore,
          mastermindStore
        );
      } catch (e) {
        expect(e).toBeInstanceOf(SinglePlayerError);
      }
    });

    it.each([2, 3, 4, 5])(
      'should generate a setup for %p players',
      async (arg) => {
        const scheme2 = new SoloBannedScheme(
          injectGameSet(LEGENDARY.id, NEGATIVE_ZONE_PRISON_BREAKOUT)
        );
        expect(
          await scheme2.getSetup(
            arg as NumPlayers,
            mastermindStore.getOneRandom(),
            heroStore,
            villainStore,
            henchmenStore,
            mastermindStore
          )
        ).toBeTruthy();
      }
    );
  });
});
