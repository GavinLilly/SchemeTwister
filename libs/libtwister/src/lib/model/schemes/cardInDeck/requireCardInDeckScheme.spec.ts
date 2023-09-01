import { GAME_SET as CHAMPIONS } from '../../../data/gameSets/champions';
import { CLASH_OF_THE_MONSTERS_UNLEASHED } from '../../../data/gameSets/champions/champions.schemes';
import { MONSTERS_UNLEASHED } from '../../../data/gameSets/champions/champions.villains';
import { GAME_SET as DARK_CITY } from '../../../data/gameSets/darkCity';
import { MAGGIA_GOONS } from '../../../data/gameSets/darkCity/darkCity.henchmen';
import { JEAN_GREY } from '../../../data/gameSets/darkCity/darkCity.heroes';
import {
  ORGANIZED_CRIME_WAVE,
  TRANSFORM_CITIZENS_INTO_DEMONS,
} from '../../../data/gameSets/darkCity/darkCity.schemes';
import { GAME_SET as DEADPOOL } from '../../../data/gameSets/deadpool';
import {
  DEADPOOL_KILLS_THE_MARVEL_UNIVERSE,
  EVERYBODY_HATES_DEADPOOL,
} from '../../../data/gameSets/deadpool/deadpool.schemes';
import { GAME_SET as GUARDIANS } from '../../../data/gameSets/guardiansOfTheGalaxy';
import { THE_KREE_SKRULL_WAR } from '../../../data/gameSets/guardiansOfTheGalaxy/guardiansOfTheGalaxy.schemes';
import { KREE_STARFORCE } from '../../../data/gameSets/guardiansOfTheGalaxy/guardiansOfTheGalaxy.villains';
import { GAME_SET as INTO_THE_COSMOS } from '../../../data/gameSets/intoTheCosmos';
import { ADAM_WARLOCK } from '../../../data/gameSets/intoTheCosmos/intoTheCosmos.heroes';
import { TURN_THE_SOUL_OF_ADAM_WARLOCK } from '../../../data/gameSets/intoTheCosmos/intoTheCosmos.schemes';
import { GAME_SET as LEGENDARY } from '../../../data/gameSets/legendary';
import { SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS } from '../../../data/gameSets/legendary/legendary.schemes';
import { SKRULLS } from '../../../data/gameSets/legendary/legendary.villains';
import { GAME_SET as MIDNIGHT_SONS } from '../../../data/gameSets/midnightSons';
import { MIDNIGHT_MASSACRE } from '../../../data/gameSets/midnightSons/midnightSons.schemes';
import { GAME_SET as SHIELD } from '../../../data/gameSets/shield';
import { SHIELD_VS_HYDRA_WAR } from '../../../data/gameSets/shield/shield.schemes';
import {
  AIM_HYDRA_OFFSHOOT,
  HYDRA_ELITE,
} from '../../../data/gameSets/shield/shield.villains';
import { GAME_SET as VILLAINS } from '../../../data/gameSets/villains';
import { COPS } from '../../../data/gameSets/villains/villains.henchmen';
import { CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS } from '../../../data/gameSets/villains/villains.schemes';
import { GAME_SET as WWHULK } from '../../../data/gameSets/worldWarHulk';
import { MUTATING_GAMMA_RAYS } from '../../../data/gameSets/worldWarHulk/worldWarHulk.schemes';
import { MERCS_FOR_MONEY } from '../../../data/teams';
import { StoreBuilder, StoreOfStores } from '../../../factories';
import { Hero, VillainGroup } from '../../cards';
import { IGameSetup } from '../../interfaces';
import { DECK_TYPE } from '../../types';
import { Scheme } from '../Scheme';

import { RequireCard } from './requireCard';
import { RequireCardInDeckScheme } from './requireCardInDeckScheme';
import { RequireCardName } from './requireCardName';
import { RequireHenchmen } from './requireHenchmen';
import { RequireHero } from './requireHero';
import { RequireTeam } from './requireTeam';
import { RequireVillainGroup } from './requireVillainGroup';

describe('Require Henchmen', () => {
  describe('in Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
    });

    it('should include Maggia Goons in the villain deck', () => {
      const scheme = new RequireCardInDeckScheme(
        ORGANIZED_CRIME_WAVE,
        new RequireCard(MAGGIA_GOONS),
        new RequireHenchmen(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(setup.villainDeck.henchmen).toContain(MAGGIA_GOONS);
    });
  });

  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(VILLAINS).build();
    });

    it('should include Cops in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        CAGE_VILLAINS_IN_POWERSUPPRESSING_CELLS,
        new RequireCard(COPS),
        new RequireHenchmen(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(setup.additionalDeck?.deck.henchmen).toContain(COPS);
    });
  });
});

describe('Require Hero', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(DARK_CITY, INTO_THE_COSMOS)
        .withMastermindGamesets(DARK_CITY)
        .withVillainGamesets(DARK_CITY, INTO_THE_COSMOS)
        .withHenchmenGamesets(DARK_CITY)
        .build();
    });

    it('should include Adam Warlock in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TURN_THE_SOUL_OF_ADAM_WARLOCK,
        new RequireCard(ADAM_WARLOCK),
        new RequireHero(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(setup.additionalDeck?.deck.heroes).toContain(ADAM_WARLOCK);
    });
  });

  describe('in Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(DARK_CITY).build();
    });

    it('should include Jean Grey in the villain deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TRANSFORM_CITIZENS_INTO_DEMONS,
        new RequireCard(JEAN_GREY),
        new RequireHero(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(setup.villainDeck.heroes).toContain(JEAN_GREY);
    });
  });
});

describe('Require Hero Name', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;
    let scheme: Scheme;
    let setup: IGameSetup;

    const isHulk = (hero: Hero) => hero.name.toLowerCase().includes('hulk');

    beforeAll(() => {
      store = new StoreBuilder().withSingleGameset(WWHULK).build();

      scheme = new RequireCardInDeckScheme(
        MUTATING_GAMMA_RAYS,
        new RequireCardName('hulk'),
        new RequireHero(),
        DECK_TYPE.additional
      );

      setup = scheme.getSetup(2, store.mastermindStore.getRandom(), store);
    });

    it('should include 1 "Hulk" hero in the additional deck', () => {
      const hulkHeroes = setup.additionalDeck?.deck.heroes?.filter(isHulk);

      expect(hulkHeroes).toHaveLength(1);
    });

    it('should throw an error when no Hulks are available', () => {
      store = new StoreBuilder()
        .withHeroGamesets(DARK_CITY)
        .withMastermindGamesets(WWHULK)
        .withVillainGamesets(WWHULK)
        .withHenchmenGamesets(WWHULK)
        .build();

      expect(() =>
        scheme.getSetup(3, store.mastermindStore.getRandom(), store)
      ).toThrow();
    });
  });

  describe('in Hero Deck', () => {
    let store: StoreOfStores;
    let scheme: Scheme;
    let setup: IGameSetup;

    const isDeadpool = (hero: Hero) =>
      hero.name.toLowerCase().includes('deadpool');

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(DEADPOOL, LEGENDARY)
        .withMastermindGamesets(DEADPOOL)
        .withVillainGamesets(DEADPOOL)
        .withHenchmenGamesets(LEGENDARY)
        .build();

      scheme = new RequireCardInDeckScheme(
        DEADPOOL_KILLS_THE_MARVEL_UNIVERSE,
        new RequireCardName('deadpool', 1, true),
        new RequireHero(),
        DECK_TYPE.hero
      );

      setup = scheme.getSetup(2, store.mastermindStore.getRandom(), store);
    });

    it('should only include 1 Deadpool hero', () => {
      const deadpoolHeroes = setup.heroDeck.heroes.filter(isDeadpool);

      expect(deadpoolHeroes).toHaveLength(1);
    });

    it('should not have any Deadpool heroes available in the store', () => {
      const deadpoolHeroes = store.heroStore.availableCards.filter(isDeadpool);

      expect(deadpoolHeroes).toHaveLength(0);
    });

    it('should throw an error when no Deadpools are available', () => {
      store = new StoreBuilder()
        .withHeroGamesets(DARK_CITY)
        .withMastermindGamesets(DEADPOOL)
        .withVillainGamesets(DEADPOOL)
        .withHenchmenGamesets(LEGENDARY)
        .build();

      expect(() =>
        scheme.getSetup(3, store.mastermindStore.getRandom(), store)
      ).toThrow();
    });
  });

  describe('in Villain Deck Scheme', () => {
    let store: StoreOfStores;
    let scheme: Scheme;
    let setup: IGameSetup;

    const isBlade = (hero: Hero) => hero.name.toLowerCase().includes('blade');

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(MIDNIGHT_SONS, DARK_CITY)
        .withMastermindGamesets(DARK_CITY)
        .withVillainGamesets(DARK_CITY)
        .withHenchmenGamesets(DARK_CITY)
        .build();

      scheme = new RequireCardInDeckScheme(
        MIDNIGHT_MASSACRE,
        new RequireCardName('blade'),
        new RequireHero(),
        DECK_TYPE.villain
      );

      setup = scheme.getSetup(2, store.mastermindStore.getRandom(), store);
    });

    it('should only include 1 Blade hero', () => {
      expect(setup.villainDeck.heroes).toBeDefined();
      expect(setup.villainDeck.heroes?.filter(isBlade)).toHaveLength(1);
    });

    it('should throw an error when no Blades are available', () => {
      store = new StoreBuilder()
        .withHeroGamesets(LEGENDARY)
        .withMastermindGamesets(LEGENDARY)
        .withVillainGamesets(LEGENDARY)
        .withHenchmenGamesets(LEGENDARY)
        .build();

      expect(() =>
        scheme.getSetup(3, store.mastermindStore.getRandom(), store)
      ).toThrow();
    });
  });
});

describe('Require Team', () => {
  describe('in Hero Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(DEADPOOL, DARK_CITY)
        .withMastermindGamesets(DARK_CITY)
        .withVillainGamesets(DARK_CITY)
        .withHenchmenGamesets(DARK_CITY)
        .build();
    });

    it('should have at least 1 Merc for Money hero', () => {
      const scheme = new RequireCardInDeckScheme(
        EVERYBODY_HATES_DEADPOOL,
        new RequireTeam(MERCS_FOR_MONEY),
        new RequireHero(),
        DECK_TYPE.hero
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(
        setup.heroDeck.heroes.filter((hero) => hero.team === MERCS_FOR_MONEY)
          .length
      ).toBeGreaterThanOrEqual(1);
    });
  });
});

describe('Require Villain Group', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(CHAMPIONS)
        .withMastermindGamesets(CHAMPIONS)
        .withVillainGamesets(LEGENDARY, CHAMPIONS)
        .withHenchmenGamesets(LEGENDARY)
        .build();
    });

    it('should include Monsters Unleashed in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        CLASH_OF_THE_MONSTERS_UNLEASHED,
        new RequireCard(MONSTERS_UNLEASHED),
        new RequireVillainGroup(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup(
        2,
        store.mastermindStore.getRandom(),
        store
      );

      expect(setup.additionalDeck?.deck.villains).toContain(MONSTERS_UNLEASHED);
    });
  });
});

describe('Require Villains Groups', () => {
  describe('in Villain Deck', () => {
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
      it('should include Skrulls in the villain deck', () => {
        const scheme = new RequireCardInDeckScheme(
          SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS,
          new RequireCard(SKRULLS),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        const setup = scheme.getSetup(
          2,
          store.mastermindStore.getRandom(),
          store
        );

        expect(setup.villainDeck.villains).toContain(SKRULLS);
      });
    });

    describe('The Kree-Skrull War', () => {
      let scheme: Scheme;
      let setup: IGameSetup;

      beforeEach(() => {
        scheme = new RequireCardInDeckScheme(
          THE_KREE_SKRULL_WAR,
          new RequireCard(SKRULLS, 2, false, KREE_STARFORCE),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup(2, store.mastermindStore.getRandom(), store);
      });

      it('should include Skrulls in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(SKRULLS));

      it('should include Kree Starforce in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(KREE_STARFORCE));
    });

    describe('S.H.I.E.L.D. vs. HYDRA War', () => {
      let scheme: Scheme;
      let setup: IGameSetup;

      const shieldVillainPredicate = (item: VillainGroup) =>
        [AIM_HYDRA_OFFSHOOT, HYDRA_ELITE].includes(item);

      beforeEach(() => {
        scheme = new RequireCardInDeckScheme(
          SHIELD_VS_HYDRA_WAR,
          new RequireCard(HYDRA_ELITE, 1, true, AIM_HYDRA_OFFSHOOT),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup(3, store.mastermindStore.getRandom(), store);
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
});
