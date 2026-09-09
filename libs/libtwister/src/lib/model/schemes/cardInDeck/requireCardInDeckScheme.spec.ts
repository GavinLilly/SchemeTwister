import { beforeEach, describe, expect, it } from 'vitest';

import { StoreBuilder, StoreOfStores } from '../../../factories';
import { MockCardFactory, MockGameSetFactory } from '../../../mocks';
import { randomize } from '../../../utils/randomize';
import { VillainGroup } from '../../cards';
import { GameSet } from '../../GameSet';
import { IGameSetup } from '../../interfaces';
import { DECK_TYPE } from '../../types';


import { RequireCard } from './requireCard';
import { RequireCardInDeckScheme } from './requireCardInDeckScheme';
import { RequireCardName } from './requireCardName';
import { RequireHenchmen } from './requireHenchmen';
import { RequireHero } from './requireHero';
import { RequireTeam } from './requireTeam';
import { RequireVillainGroup } from './requireVillainGroup';

const mockCardFactory = new MockCardFactory();
const gameSetFactory = new MockGameSetFactory();

describe('Require Henchmen', () => {
  let gameSet: GameSet;
  let store: StoreOfStores;

  beforeEach(() => {
    gameSet = gameSetFactory.createGameSet();
    store = new StoreBuilder().withAllFromGamesets(gameSet).build();
  });

  describe('in Villain Deck', () => {
    it('should include a specific Henchmen in the villain deck', () => {
      const expectedHenchmen = store.henchmenStore.getRandom();
      const scheme = new RequireCardInDeckScheme(
        mockCardFactory.createSchemeDefinition(),
        new RequireCard(expectedHenchmen),
        new RequireHenchmen(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup({
        numPlayers: 2,
        mastermind: store.mastermindStore.getRandom(),
        store,
      });

      expect(setup.villainDeck.henchmen).toContain(expectedHenchmen);
    });
  });

  describe('in Additional Deck', () => {
    it('should include a specific Henchmen in the additional deck', () => {
      const schemeDef = mockCardFactory.createSchemeDefinition();
      schemeDef.meta.numTwists = 8;
      schemeDef.meta.rules = (rule) => {
        rule.additionalDeck.push({
          name: 'Cop stack',
          deck: {
            numHenchmenGroups: 1,
          },
        });
        return rule;
      };
      const expectedHenchmen = store.henchmenStore.getRandom();
      const scheme = new RequireCardInDeckScheme(
        schemeDef,
        new RequireCard(expectedHenchmen),
        new RequireHenchmen(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.additionalDecks[0].deck.henchmen).toBeDefined();
      expect(setup.additionalDecks[0].deck.henchmen).toContain(
        expectedHenchmen
      );
    });
  });
});

describe('Require Hero', () => {
  describe('in Villain Deck', () => {
    let store: StoreOfStores;
    const gameSet = gameSetFactory.createGameSet();

    beforeEach(() => {
      store = new StoreBuilder().withAllFromGamesets(gameSet).build();
    });

    it('should include a hero in the villain deck', () => {
      const hero = randomize(gameSet.heroes);
      const scheme = new RequireCardInDeckScheme(
        mockCardFactory.createSchemeDefinition(),
        new RequireCard(hero),
        new RequireHero(),
        DECK_TYPE.villain
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.villainDeck.heroes!).toContain(hero);
    });
  });
});

describe('Require Hero Name', () => {
  const gameSet = gameSetFactory.createGameSet();
  const store = new StoreBuilder().withAllFromGamesets(gameSet).build();

  beforeEach(() => {
    store.reset();
  });

  describe('in Additional Deck', () => {
    const selectedHeroName = store.heroStore.getRandom().name;

    const schemeDef = mockCardFactory.createSchemeDefinition();
    schemeDef.meta.numTwists = 8;
    schemeDef.meta.rules = (rule) => {
      rule.heroDeck.numHeroes = 4;
      rule.additionalDeck.push({
        name: 'Test heroes with Foo in name',
        deck: { numHeroes: 1 },
      });
      return rule;
    };

    const scheme = new RequireCardInDeckScheme(
      schemeDef,
      new RequireCardName(selectedHeroName),
      new RequireHero(),
      DECK_TYPE.additional
    );

    it(`should include 1 hero with name "${selectedHeroName}" in the additional deck`, () => {
      const setup = scheme.getSetup({ numPlayers: 2, store });
      expect(setup.additionalDecks).toHaveLength(1);
      expect(setup.additionalDecks[0].deck.heroes).toBeDefined();

      const heroWithName = setup.additionalDecks[0].deck.heroes!.filter(
        (hero) => hero.name === selectedHeroName
      );

      expect(heroWithName).toHaveLength(1);
    });

    it('should throw an error when no "Foo" cards are available', () => {
      const emptyStore = new StoreBuilder()
        .withAllFromGamesets(gameSetFactory.createGameSet())
        .build();

      expect(() =>
        scheme.getSetup({ numPlayers: 3, store: emptyStore })
      ).toThrow();
    });
  });

  describe('in Hero Deck', () => {
    const selectedHeroName = store.heroStore.getRandom().name;
    it(`should only include 1 "${selectedHeroName}" hero`, () => {
      const scheme = new RequireCardInDeckScheme(
        mockCardFactory.createSchemeDefinition(),
        new RequireCardName(selectedHeroName, 1, true),
        new RequireHero(),
        DECK_TYPE.hero
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });
      const nameHeroes = setup.heroDeck.heroes.filter(
        (hero) => hero.name === selectedHeroName
      );
      expect(nameHeroes).toHaveLength(1);
      expect(
        store.heroStore.availableCards.filter(
          (hero) => hero.name === selectedHeroName
        )
      ).toHaveLength(0);
    });
    it('should throw an error when no cards are available with "Bar" in their name', () => {
      const store = new StoreBuilder()
        .withAllFromGamesets(gameSetFactory.createGameSet())
        .build();
      const scheme = new RequireCardInDeckScheme(
        mockCardFactory.createSchemeDefinition(),
        new RequireCardName('Bar', 1, true),
        new RequireHero(),
        DECK_TYPE.hero
      );
      expect(() => scheme.getSetup({ numPlayers: 3, store })).toThrow();
    });
  });

  describe('in Villain Deck', () => {
    const selectedHeroName = store.heroStore.getRandom().name;

    const scheme = new RequireCardInDeckScheme(
      mockCardFactory.createSchemeDefinition(),
      new RequireCardName(selectedHeroName),
      new RequireHero(),
      DECK_TYPE.villain
    );

    it(`should only include 1 "${selectedHeroName}" hero`, () => {
      const setup = scheme.getSetup({ numPlayers: 2, store });
      expect(setup.villainDeck.heroes).toBeDefined();
      const name = setup.villainDeck.heroes!.filter(
        (hero) => hero.name === selectedHeroName
      );
      expect(name).toHaveLength(1);
    });

    it('should throw an error when no "Foo" heroes are available', () => {
      const store = new StoreBuilder()
        .withAllFromGamesets(gameSetFactory.createGameSet())
        .build();

      expect(() => scheme.getSetup({ numPlayers: 3, store })).toThrow();
    });
  });
});

describe('Require Team', () => {
  describe('in Hero Deck', () => {
    let store: StoreOfStores;
    const gameSet = gameSetFactory.createGameSet();

    beforeEach(() => {
      store = new StoreBuilder().withAllFromGamesets(gameSet).build();
    });

    it('should have at least 1 Merc for Money hero', () => {
      const teams = gameSet.heroes
        .flatMap((hero) => hero.team)
        .filter((team) => !!team);
      const team = randomize(teams);

      const scheme = new RequireCardInDeckScheme(
        mockCardFactory.createSchemeDefinition(),
        new RequireTeam(team),
        new RequireHero(),
        DECK_TYPE.hero
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      const heroesWithTeam = setup.heroDeck.heroes.filter(
        (hero) => hero.team === team
      );
      expect(heroesWithTeam.length).toBeGreaterThanOrEqual(1);
    });
  });
});

describe('Require Villain Group', () => {
  describe('in Additional Deck', () => {
    let store: StoreOfStores;
    const gameSet = gameSetFactory.createGameSet();

    beforeEach(() => {
      store = new StoreBuilder().withAllFromGamesets(gameSet).build();
    });

    it('should include a villain group in the additional deck', () => {
      const villainGroup = randomize(gameSet.villains!);
      const schemeDef = mockCardFactory.createSchemeDefinition();
      schemeDef.meta.numTwists = 8;
      schemeDef.meta.rules = (rule) => {
        rule.additionalDeck.push({
          name: 'Villain stack',
          deck: {
            numVillainGroups: 1,
          },
        });
        return rule;
      };
      const scheme = new RequireCardInDeckScheme(
        schemeDef,
        new RequireCard(villainGroup),
        new RequireVillainGroup(),
        DECK_TYPE.additional
      );
      const setup = scheme.getSetup({ numPlayers: 2, store });

      expect(setup.additionalDecks.length).toBeGreaterThan(0);
      expect(setup.additionalDecks[0].deck.villains).toContain(villainGroup);
    });
  });
});

describe('Require Villains Groups', () => {
  describe('in Villain Deck', () => {
    let gameSet: GameSet;
    let store: StoreOfStores;

    beforeEach(() => {
      gameSet = gameSetFactory.createGameSet();
      store = new StoreBuilder().withAllFromGamesets(gameSet).build();
    });

    describe('Require 1 villain group', () => {
      it('should include Skrulls in the villain deck', () => {
        const villain = store.villainStore.getRandom();
        const scheme = new RequireCardInDeckScheme(
          randomize(gameSet.schemes!),
          new RequireCard(villain),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        const setup = scheme.getSetup({ numPlayers: 2, store });

        expect(setup.villainDeck.villains).toContain(villain);
      });
    });

    describe('Require 2 villain groups', () => {
      let setup: IGameSetup;
      let villains: VillainGroup[];

      beforeEach(() => {
        villains = store.villainStore.getRandom({ count: 2 });
        const scheme = new RequireCardInDeckScheme(
          randomize(gameSet.schemes!),
          new RequireCard(villains[0], 2, false, villains[1]),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup({ numPlayers: 2, store });
      });

      it('should include the first villain in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(villains[0]));

      it('should include the second villain in the villain deck', () =>
        expect(setup.villainDeck.villains).toContain(villains[1]));
    });

    describe('Require 1 villains group and remove others', () => {
      let setup: IGameSetup;
      let villains: VillainGroup[];

      beforeEach(() => {
        villains = store.villainStore.getRandom({ count: 3 });
        const scheme = new RequireCardInDeckScheme(
          randomize(gameSet.schemes!),
          new RequireCard(villains[0], 1, true, ...villains.slice(1)),
          new RequireVillainGroup(),
          DECK_TYPE.villain
        );
        setup = scheme.getSetup({ numPlayers: 3, store });
      });

      it('should include only 1 of the villains, unless the mastermind demands one of the others', () => {
        const numSelectedVillains = setup.villainDeck.villains
          .map(
            (villain) =>
              villains.includes(villain) &&
              !setup.mastermind.alwaysLeads.includes(villain)
          )
          .reduce((prev, curr) => (curr ? prev + 1 : prev), 0);

        expect(numSelectedVillains).toBeLessThanOrEqual(1);
      });

      it('should remove the chosen and non-chosen villain from the store', () =>
        villains.forEach((villain) =>
          expect(store.villainStore.excludedCards).toContain(villain)
        ));
    });
  });
});
