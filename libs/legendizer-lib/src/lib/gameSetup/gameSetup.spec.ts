import { Bystanders } from '../bystanders/bystanders';
import { GameSets, GameSetSize } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Heroes } from '../heroes';
import { Masterminds } from '../masterminds';
import { Schemes } from '../schemes';
import { VillainGroups } from '../villains';
import { GameSetup } from './gameSetup';
import { IGameSetup } from './gameSetup.interface';

describe('GameSetup', () => {
  it('should create with all Gamesets', () => {
    expect(new GameSetup(...GameSets.ALL)).toBeTruthy();
  });

  it('should fail with an empty Gameset', () => {
    expect(() => new GameSetup(...[])).toThrow(Error);
  });

  it('should fail without a big box game set', () => {
    expect(
      () =>
        new GameSetup(
          ...GameSets.ALL.filter(
            (item) => ![GameSetSize.LARGE, GameSetSize.CORE].includes(item.size)
          )
        )
    ).toThrow(Error);
  });
});

describe('Game creation', () => {
  let setup: GameSetup;
  let game: IGameSetup;

  beforeAll(() => {
    setup = new GameSetup(...GameSets.ALL);
  });

  describe('should fail', () => {
    it('if the scheme is not in the list of game sets', () => {
      setup = new GameSetup(GameSets.LEGENDARY);
      expect(() =>
        setup.generateGame(2, Schemes.X_MEN.THE_DARK_PHOENIX_SAGA)
      ).toThrow();
    });
  });

  describe('should have', () => {
    beforeAll(() => {
      game = setup.generateGame(2);
    });

    it('a scheme', () => expect(game.scheme).toBeTruthy());
    it('a mastermind', () => expect(game.mastermind).toBeTruthy());
    it('some heroes', () =>
      expect(game.heroDeck.heroes.length).toBeGreaterThan(0));
    it('some villains', () =>
      expect(game.villainDeck.villains.length).toBeGreaterThan(0));
    it('some henchmen', () =>
      expect(game.villainDeck.henchmen.length).toBeGreaterThan(0));
    it('2 players', () => expect(game.numPlayers).toEqual(2));
  });
});

describe('All cards', () => {
  it('should have unique IDs', () => {
    const iDs: string[] = [
      ...Bystanders.ALL,
      ...Henchmen.ALL,
      ...Heroes.ALL,
      ...Masterminds.ALL,
      ...Schemes.ALL,
      ...VillainGroups.ALL,
      ...GameSets.ALL,
    ].map((item) => item.id);
    const uniqueIDs: Set<string> = new Set(iDs);
    expect(iDs).toHaveLength(uniqueIDs.size);
  });
});

describe('Villain deck', () => {
  let setup: GameSetup;
  let game: IGameSetup;

  beforeAll(() => {
    setup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.DARK_CITY,
      GameSets.GUARDIANS_OF_THE_GALAXY,
      GameSets.PAINT_THE_TOWN_RED
    );
  });

  describe('Villain groups', () => {
    it('should include Skrulls', () => {
      game = setup.generateGame(
        2,
        Schemes.LEGENDARY.SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS
      );
      expect(game.villainDeck.villains).toContain(
        VillainGroups.LEGENDARY.SKRULLS
      );
    });

    it('should include Four Horsemen', () => {
      game = setup.generateGame(
        2,
        Schemes.LEGENDARY.MIDTOWN_BANK_ROBBERY,
        Masterminds.DARK_CITY.APOCALYPSE
      );
      expect(game.villainDeck.villains).toContain(
        VillainGroups.DARK_CITY.FOUR_HORSEMEN
      );
    });

    it('should include Kree and Skrull', () => {
      game = setup.generateGame(
        2,
        Schemes.GUARDIANS_OF_THE_GALAXY.THE_KREE_SKRULL_WAR
      );
      expect(game.villainDeck.villains).toContain(
        VillainGroups.GUARDIANS_OF_THE_GALAXY.KREE_STARFORCE
      );
      expect(game.villainDeck.villains).toContain(
        VillainGroups.LEGENDARY.SKRULLS
      );
    });

    it('should include the Sinister Six', () => {
      game = setup.generateGame(
        2,
        Schemes.PAINT_THE_TOWN_RED.SPLICE_HUMANS_WITH_SPIDER_DNA
      );
      expect(game.villainDeck.villains).toContain(
        VillainGroups.PAINT_THE_TOWN_RED.SINISTER_SIX
      );
    });
  });

  describe('Henchmen', () => {
    it('should include Maggia Goons', () => {
      game = setup.generateGame(2, Schemes.DARK_CITY.ORGANIZED_CRIME_WAVE);
      expect(game.villainDeck.henchmen).toContain(
        Henchmen.DARK_CITY.MAGGIA_GOONS
      );
    });
    it('should include Doombots', () => {
      game = setup.generateGame(
        2,
        Schemes.LEGENDARY.MIDTOWN_BANK_ROBBERY,
        Masterminds.LEGENDARY.DR_DOOM
      );
      expect(game.villainDeck.henchmen).toContain(
        Henchmen.LEGENDARY.DOOMBOT_LEGION
      );
    });
  });

  describe('Heroes', () => {
    it('should include Jean Grey', () => {
      game = setup.generateGame(
        2,
        Schemes.DARK_CITY.TRANSFORM_CITIZENS_INTO_DEMONS
      );
      expect(game.villainDeck.heroes).toContain(Heroes.DARK_CITY.JEAN_GREY);
      expect(game.heroDeck.heroes).not.toContain(Heroes.DARK_CITY.JEAN_GREY);
    });
    it('should put a hero in the villain deck', () => {
      game = setup.generateGame(2, Schemes.DARK_CITY.XCUTIONERS_SONG);
      expect(game.villainDeck.heroes).toBeDefined();
      expect(game.villainDeck.heroes?.length).toBeGreaterThan(0);
    });
  });
});

describe('Hero deck', () => {
  let setup: GameSetup;
  let game: IGameSetup;

  beforeAll(() => {
    setup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.DARK_CITY,
      GameSets.PAINT_THE_TOWN_RED
    );
  });

  it('should contain bystanders in the hero deck', () => {
    game = setup.generateGame(2, Schemes.DARK_CITY.SAVE_HUMANITY);
    expect(game.heroDeck.bystanders).toBeTruthy();
  });

  it('should contain a henchmen group in the hero deck', () => {
    const gameSetup = setup.generateGame(
      2,
      Schemes.PAINT_THE_TOWN_RED.INVADE_THE_DAILY_BUGLE_NEWS_HQ
    );
    expect(gameSetup.heroDeck.henchmen).toBeDefined();
    expect(gameSetup.heroDeck.henchmen?.length).toBeGreaterThan(0);
  });
});

describe('Additional deck', () => {
  let setup: GameSetup;
  let game: IGameSetup;

  beforeAll(() => {
    setup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.SHIELD,
      GameSets.WORLD_WAR_HULK
    );
  });

  describe('Secret Empire of Betrayal', () => {
    beforeAll(() => {
      game = setup.generateGame(2, Schemes.SHIELD.SECRET_EMPIRE_OF_BETRAYAL);
    });

    it('should be defined', () => expect(game.additionalDeck).toBeDefined());
    it('should be called "Dark Loyalty"', () =>
      expect(game.additionalDeck?.name).toEqual('Dark Loyalty'));
    it('should contain a hero', () =>
      expect(game.additionalDeck?.cards.heroes?.length).toEqual(1));
    it('should contain a hero not in the main hero deck', () =>
      expect(game.heroDeck.heroes).not.toContain(
        game.additionalDeck?.cards.heroes
      ));
  });

  describe('Cytoplasm Spike Invasion', () => {
    beforeAll(() => {
      game = setup.generateGame(
        2,
        Schemes.WORLD_WAR_HULK.CYTOPLASM_SPIKE_INVASION
      );
    });

    it('additional deck should be defined', () =>
      expect(game.additionalDeck).toBeDefined());
    it('should be called "Infected Deck"', () =>
      expect(game.additionalDeck?.name).toEqual('Infected Deck'));
    it('henchmen should be defined', () =>
      expect(game.additionalDeck?.cards.henchmen).toBeDefined());
    it('should contain Cytoplasm Spike henchmen', () =>
      expect(game.additionalDeck?.cards.henchmen).toContain(
        Henchmen.WORLD_WAR_HULK.CYTOPLASM_SPIKES
      ));
    it('should require 20 bystanders', () =>
      expect(game.additionalDeck?.cards.numBystanders).toEqual(20));
  });

  describe('Mutating Gamma Rays', () => {
    beforeAll(() => {
      game = setup.generateGame(2, Schemes.WORLD_WAR_HULK.MUTATING_GAMMA_RAYS);
    });

    it('additional deck should be defined', () =>
      expect(game.additionalDeck).toBeDefined());
    it('should be called "Mutation Pile"', () =>
      expect(game.additionalDeck?.name).toEqual('Mutation Pile'));
    it('heroes should be defined', () =>
      expect(game.additionalDeck?.cards.heroes).toBeDefined());
    it('should contain 1 hero', () =>
      expect(game.additionalDeck?.cards.heroes).toHaveLength(1));
    it('should contain a hero with a "Hulk" name', () =>
      expect(
        game.additionalDeck?.cards.heroes?.every((hero) =>
          hero.name.toUpperCase().includes('HULK')
        )
      ).toBeTruthy());
    it('should contain a hero not in the main hero deck', () =>
      expect(game.heroDeck.heroes).not.toContain(
        game.additionalDeck?.cards.heroes
      ));
  });

  describe('Shoot Hulk into Space', () => {
    beforeAll(() => {
      game = setup.generateGame(
        2,
        Schemes.WORLD_WAR_HULK.SHOOT_HULK_INTO_SPACE
      );
    });

    it('additional deck should be defined', () =>
      expect(game.additionalDeck).toBeDefined());
    it('should be called "Hulk Deck"', () =>
      expect(game.additionalDeck?.name).toEqual('Hulk Deck'));
    it('heroes should be defined', () =>
      expect(game.additionalDeck?.cards.heroes).toBeDefined());
    it('should contain 1 hero', () =>
      expect(game.additionalDeck?.cards.heroes).toHaveLength(1));
    it('should contain a hero with a "Hulk" name', () =>
      expect(
        game.additionalDeck?.cards.heroes?.every((hero) =>
          hero.name.toUpperCase().includes('HULK')
        )
      ).toBeTruthy());
    it('should contain a hero not in the main hero deck', () =>
      expect(game.heroDeck.heroes).not.toContain(
        game.additionalDeck?.cards.heroes
      ));
  });

  describe('World War Hulk', () => {
    beforeAll(() => {
      game = setup.generateGame(2, Schemes.WORLD_WAR_HULK.WORLD_WAR_HULK);
    });

    it('additional deck should be defined', () =>
      expect(game.additionalDeck).toBeDefined());
    it('should be called "Lurking"', () =>
      expect(game.additionalDeck?.name).toEqual('Lurking'));
    it('masterminds should be defined', () =>
      expect(game.additionalDeck?.cards.masterminds).toBeDefined());
    it('should contain 3 masterminds', () =>
      expect(game.additionalDeck?.cards.masterminds).toHaveLength(3));
    it('should not contain the main mastermind', () =>
      expect(game.additionalDeck?.cards.masterminds).not.toContain(
        game.mastermind
      ));
  });
});

describe('The Dark Phoenix Saga', () => {
  let setup: GameSetup;
  let game: IGameSetup;

  beforeAll(() => {
    setup = new GameSetup(GameSets.LEGENDARY, GameSets.X_MEN);
    game = setup.generateGame(2, Schemes.X_MEN.THE_DARK_PHOENIX_SAGA);
  });

  it('should include the Hellfire club', () => {
    expect(game.villainDeck.villains).toContain(
      VillainGroups.X_MEN.HELLFIRE_CLUB
    );
  });
  it('should include Jean Grey in the villain deck', () => {
    expect(game.villainDeck.heroes).toContain(Heroes.DARK_CITY.JEAN_GREY);
  });

  it('should include Phoenix', () => {
    game = new GameSetup(GameSets.LEGENDARY, GameSets.X_MEN).generateGame(
      2,
      Schemes.X_MEN.THE_DARK_PHOENIX_SAGA
    );
    expect(game.villainDeck.heroes).toContain(Heroes.X_MEN.PHOENIX);
  });
});
