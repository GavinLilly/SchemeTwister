import { describe, beforeAll, it, expect, beforeEach } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../../factories';
import { TEST_GAME_SET_1, TEST_GAME_SET_2 } from '../../../testData/gameSets';
import { TEST_HENCHMEN_1 } from '../../../testData/henchmen';
import { TEST_HERO_1 } from '../../../testData/heroes';
import {
  TEST_HERO_IN_VILLAIN_DECK_SCHEME,
  TEST_NORMAL_SCHEME,
  TEST_REQUIRE_CARD_IN_DECK_SCHEME,
  TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
  TEST_REQUIRE_HENCHMEN_IN_ADDITIONAL_DECK,
  TEST_REQUIRE_VILLAINS_IN_ADDITIONAL_DECK,
} from '../../../testData/schemes';
import { TEST_TEAM_1 } from '../../../testData/teams';
import {
  TEST_VILLAIN_1,
  TEST_VILLAIN_2,
  TEST_VILLAIN_3,
  TEST_VILLAIN_4,
} from '../../../testData/villains';
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
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should include TEST_HENCHMEN_1 in the villain deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_CARD_IN_DECK_SCHEME,
        new RequireCard(TEST_HENCHMEN_1),
        new RequireHenchmen(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: store.mastermindStore.getRandom(),
        store,
      });

      expect(setup.villainDeck.henchmen).toContain(TEST_HENCHMEN_1);
    });
  });

  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should include TEST_HENCHMEN_1 in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_HENCHMEN_IN_ADDITIONAL_DECK,
        new RequireCard(TEST_HENCHMEN_1),
        new RequireHenchmen(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.additionalDecks[0].deck.henchmen).toBeDefined();

      expect(setup.additionalDecks[0].deck.henchmen!).toContain(
        TEST_HENCHMEN_1
      );
    });
  });
});

describe('Require Hero', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withHeroGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .withMastermindGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .withVillainGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .withHenchmenGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should include a Hero with "Foo" in their name in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
        new RequireCardName('Foo'),
        new RequireHero(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      const heroes = setup.additionalDecks[0].deck.heroes!;

      expect(heroes.some((hero) => hero.name.includes('Foo'))).toBe(true);
    });
  });

  describe('in Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should include TEST_HERO_1 in the villain deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_HERO_IN_VILLAIN_DECK_SCHEME,
        new RequireCard(TEST_HERO_1),
        new RequireHero(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.villainDeck.heroes!).toContain(TEST_HERO_1);
    });
  });
});

describe('Require Hero Name', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;
    let scheme: Scheme;
    let setup: IGameSetup;

    const isName = (hero: Hero) => hero.name.includes('Foo');

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();

      scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
        new RequireCardName('Foo'),
        new RequireHero(),
        DECK_TYPE.additional
      );

      setup = scheme.getSetup({ numPlayers: 2, store });
    });

    it('should include 1 "Foo" hero in the additional deck', () => {
      expect(setup.additionalDecks).toHaveLength(1);
      expect(setup.additionalDecks[0].deck.heroes).toBeDefined();
      const hulkHeroes = setup.additionalDecks[0].deck.heroes!.filter(isName);

      expect(hulkHeroes).toHaveLength(1);
    });

    it('should throw an error when no "Foo" cards are available', () => {
      store = new StoreBuilder().withAllFromGamesets(TEST_GAME_SET_1).build();

      expect(() => scheme.getSetup({ numPlayers: 3, store })).toThrow();
    });
  });

  describe('in Hero Deck', () => {
    const isName = (hero: Hero) => hero.name.includes('Bar');

    describe('with 2 game sets', () => {
      let store: StoreOfStores;
      let scheme: Scheme;
      let setup: IGameSetup;

      beforeAll(() => {
        store = new StoreBuilder()
          .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
          .build();

        scheme = new RequireCardInDeckScheme(
          TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
          new RequireCardName('Bar', 1, true),
          new RequireHero(),
          DECK_TYPE.hero
        );

        setup = scheme.getSetup({ numPlayers: 2, store });
      });

      it('should only include 1 "Bar" hero', () => {
        const nameHeroes = setup.heroDeck.heroes.filter(isName);

        expect(nameHeroes).toHaveLength(1);
      });

      it('should not have any "Bar" heroes available in the store', () => {
        const nameHeroes = store.heroStore.availableCards.filter(isName);

        expect(nameHeroes).toHaveLength(0);
      });
    });

    it('should throw an error when no cards are available with "Bar" in their name', () => {
      const store = new StoreBuilder()
        .withHeroGamesets(TEST_GAME_SET_1)
        .withMastermindGamesets(TEST_GAME_SET_1)
        .withVillainGamesets(TEST_GAME_SET_1)
        .withHenchmenGamesets(TEST_GAME_SET_1)
        .build();

      const scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_CARD_NAME_IN_DECK_SCHEME,
        new RequireCardName('Bar', 1, true),
        new RequireHero(),
        DECK_TYPE.hero
      );

      expect(() => scheme.getSetup({ numPlayers: 3, store })).toThrow();
    });
  });

  describe('in Villain Deck', () => {
    let scheme: Scheme;

    const isName = (hero: Hero) => hero.name.includes('Foo');

    beforeAll(() => {
      scheme = new RequireCardInDeckScheme(
        TEST_HERO_IN_VILLAIN_DECK_SCHEME,
        new RequireCardName('Foo'),
        new RequireHero(),
        DECK_TYPE.villain
      );
    });

    it('should only include 1 "Foo" hero', () => {
      const store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
      const setup = scheme.getSetup({ numPlayers: 2, store });
      expect(setup.villainDeck.heroes).toBeDefined();
      const name = setup.villainDeck.heroes!.filter(isName);
      expect(name).toHaveLength(1);
    });

    it('should throw an error when no "Foo" heroes are available', () => {
      const store = new StoreBuilder()
        .withHeroGamesets(TEST_GAME_SET_1)
        .withMastermindGamesets(TEST_GAME_SET_1)
        .withVillainGamesets(TEST_GAME_SET_1)
        .withHenchmenGamesets(TEST_GAME_SET_1)
        .build();

      expect(() => scheme.getSetup({ numPlayers: 3, store })).toThrow();
    });
  });
});

describe('Require Team', () => {
  describe('in Hero Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should have at least 1 Merc for Money hero', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_NORMAL_SCHEME,
        new RequireTeam(TEST_TEAM_1),
        new RequireHero(),
        DECK_TYPE.hero
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      const merc = setup.heroDeck.heroes.filter(
        (hero) => hero.team === TEST_TEAM_1
      );
      expect(merc.length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe('Require Villain Group', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    it('should include TEST_VILLAIN_1 in the additional deck', () => {
      const scheme = new RequireCardInDeckScheme(
        TEST_REQUIRE_VILLAINS_IN_ADDITIONAL_DECK,
        new RequireCard(TEST_VILLAIN_1),
        new RequireVillainGroup(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.additionalDecks.length).toBeGreaterThan(0);
      expect(setup.additionalDecks[0].deck.villains).toContain(TEST_VILLAIN_1);
    });
  });
});

describe('Require Villains Groups', () => {
  describe('in Villain Deck', () => {
    let store: StoreOfStores;

    beforeAll(() => {
      store = new StoreBuilder()
        .withAllFromGamesets(TEST_GAME_SET_1, TEST_GAME_SET_2)
        .build();
    });

    beforeEach(() => {
      store.reset();
    });

    describe('Secret invastion of the Skurll shapeshifters', () => {
      it('should include Skrulls in the villain deck', () => {
        const scheme = new RequireCardInDeckScheme(
          TEST_NORMAL_SCHEME,
          new RequireCard(TEST_VILLAIN_2),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        const setup = scheme.getSetup({ numPlayers: 2, store });

        expect(setup.villainDeck.villains).toContain(TEST_VILLAIN_2);
      });
    });

    describe('The Kree-Skrull War', () => {
      let scheme: Scheme;
      let setup: IGameSetup;

      beforeEach(() => {
        scheme = new RequireCardInDeckScheme(
          TEST_NORMAL_SCHEME,
          new RequireCard(TEST_VILLAIN_1, 2, false, TEST_VILLAIN_2),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup({ numPlayers: 2, store });
      });

      it('should include Skrulls in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(TEST_VILLAIN_1));

      it('should include Kree Starforce in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(TEST_VILLAIN_2));
    });

    describe('S.H.I.E.L.D. vs. HYDRA War', () => {
      let scheme: Scheme;
      let setup: IGameSetup;

      const shieldVillainPredicate = (item: VillainGroup) =>
        [TEST_VILLAIN_3, TEST_VILLAIN_4].includes(item);

      beforeEach(() => {
        scheme = new RequireCardInDeckScheme(
          TEST_NORMAL_SCHEME,
          new RequireCard(TEST_VILLAIN_3, 1, true, TEST_VILLAIN_4),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup({ numPlayers: 3, store });
      });

      it('should include 1 S.H.I.E.L.D. villain group in the villain deck', () => {
        const shieldVillains = setup.villainDeck.villains.filter(
          shieldVillainPredicate
        );
        expect(shieldVillains).toHaveLength(1);
      });

      it('should remove the chosen and non-chosen villain from the store', () =>
        expect(
          store.villainStore.excludedCards?.filter(shieldVillainPredicate)
        ).toHaveLength(2));
    });
  });
});
