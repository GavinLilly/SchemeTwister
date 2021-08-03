import { Bystanders } from '../bystanders/bystanders';
import { CardType } from '../enums';
import { GameSetSize, GameSets } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Heroes, IHero } from '../heroes';
import { AntMan } from '../keywords';
import { IMastermind, Masterminds } from '../masterminds';
import { Schemes, numPlayers } from '../schemes';
import { Teams } from '../teams';
import { VillainGroups } from '../villains';

import { GameSetup } from './gameSetup';
import { IGameSetup } from './gameSetup.interface';

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

    const findDupes = (arr: string[]) => {
      const sortedArr = arr.slice().sort();
      const results = [];
      for (let i = 0; i < sortedArr.length - 1; i++) {
        if (sortedArr[i + 1] === sortedArr[i]) results.push(sortedArr[i]);
      }
      return results;
    };

    const dupes = findDupes(iDs);
    expect(dupes).toHaveLength(0);
  });
});

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

let setup: GameSetup;
let game: IGameSetup;

describe('Game creation', () => {
  beforeAll(() => {
    setup = new GameSetup(GameSets.LEGENDARY, GameSets.DARK_CITY);
  });
  it('should fail if the scheme is not in the list of game sets', () => {
    expect(() =>
      setup.generateGame(2, { scheme: Schemes.X_MEN.THE_DARK_PHOENIX_SAGA })
    ).toThrow();
  });

  it('should fail without any players specified', () =>
    expect(() => setup.generateGame(0 as numPlayers)).toThrow());
});

describe.each([
  [2, 5, 2, 1, 2, 8],
  [3, 5, 3, 1, 8, 8],
  [4, 5, 3, 2, 8, 8],
  [5, 6, 4, 2, 12, 8],
])(
  'A game created with default rules, with %i players',
  (players, heroes, villains, henchmen, bystanders, twists) => {
    beforeAll(() => {
      setup = new GameSetup(GameSets.LEGENDARY);
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.LEGENDARY.UNLEASH_THE_POWER_OF_THE_COSMIC_CUBE,
      });
    });

    it(`should have ${players} players`, () =>
      expect(game.numPlayers).toEqual(players));

    it('should have a scheme', () => expect(game.scheme).toBeTruthy());

    it('should have a mastermind', () => expect(game.mastermind).toBeTruthy());

    it(`should have ${heroes} heroes`, () =>
      expect(
        game.heroDeck.cards.filter((card) => card.cardType === CardType.HERO)
      ).toHaveLength(heroes));

    it(`should have ${villains} villains`, () =>
      expect(
        game.villainDeck.cards.filter(
          (card) => card.cardType === CardType.VILLAINGROUP
        )
      ).toHaveLength(villains));

    it(`should have ${henchmen} henchmen`, () =>
      expect(
        game.villainDeck.cards.filter(
          (card) => card.cardType === CardType.HENCHMEN
        )
      ).toHaveLength(henchmen));

    it(`should have ${bystanders} bystanders`, () =>
      expect(game.villainDeck.numBystanders).toEqual(bystanders));

    it(`should have ${twists} twists`, () =>
      expect(game.villainDeck.numTwists).toEqual(twists));
  }
);

describe('Specific scheme tests', () => {
  const playerCounts = [1, 2, 3, 4, 5];

  beforeAll(() => {
    setup = new GameSetup(...GameSets.ALL);
  });

  describe('Solo play', () => {
    it('should not allow the Super Hero Civil War scheme', () => {
      expect(() =>
        setup.generateGame(1, {
          scheme: Schemes.LEGENDARY.SUPER_HERO_CIVIL_WAR,
        })
      ).toThrow();
      expect(() =>
        setup.generateGame(1, {
          scheme: Schemes.MARVEL_STUDIOS.SUPER_HERO_CIVIL_WAR,
        })
      ).toThrow();
    });

    it('should not allow the Negative Zone Prison Breakout scheme', () => {
      expect(() =>
        setup.generateGame(1, {
          scheme: Schemes.LEGENDARY.NEGATIVE_ZONE_PRISON_BREAKOUT,
        })
      ).toThrow();
    });
  });

  describe.each(playerCounts)(
    'Secret Invasion of the Skrull Shapeshifters',
    (players) => {
      it('should include Skrulls in the villain deck', () => {
        game = setup.generateGame(players as numPlayers, {
          scheme: Schemes.LEGENDARY.SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS,
        });
        expect(game.villainDeck.cards).toContain(
          VillainGroups.LEGENDARY.SKRULLS
        );
      });
    }
  );

  describe.each(playerCounts)('The Kree-Skrull War', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.GUARDIANS_OF_THE_GALAXY.THE_KREE_SKRULL_WAR,
      });
    });

    it('should contain the Kree Startforce in the villain deck', () =>
      expect(game.villainDeck.cards).toContain(
        VillainGroups.GUARDIANS_OF_THE_GALAXY.KREE_STARFORCE
      ));

    it('should contain the Skrull in the villain deck', () =>
      expect(game.villainDeck.cards).toContain(
        VillainGroups.LEGENDARY.SKRULLS
      ));
  });

  describe.each(playerCounts)('Splice Humans with Spider-DNA', (players) => {
    it('should contain the Sinister Six in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.PAINT_THE_TOWN_RED.SPLICE_HUMANS_WITH_SPIDER_DNA,
      });
      expect(game.villainDeck.cards).toContain(
        VillainGroups.PAINT_THE_TOWN_RED.SINISTER_SIX
      );
    });
  });

  describe.each(playerCounts)('Organized Crime Wave', (players) => {
    it('should contain Maggia Goons in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.DARK_CITY.ORGANIZED_CRIME_WAVE,
      });
      expect(game.villainDeck.cards).toContain(Henchmen.DARK_CITY.MAGGIA_GOONS);
    });
  });

  describe.each(playerCounts)('Transform Citizens into Demons', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.DARK_CITY.TRANSFORM_CITIZENS_INTO_DEMONS,
      });
    });

    it('should contain Jean Grey in the villain deck', () =>
      expect(game.villainDeck.cards).toContain(Heroes.DARK_CITY.JEAN_GREY));

    it('should not contain Jean Grey in the hero deck', () =>
      expect(game.heroDeck.cards).not.toContain(Heroes.DARK_CITY.JEAN_GREY));
  });

  describe.each(playerCounts)("X-cutioner's song", (players) => {
    it('should put a hero in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.DARK_CITY.XCUTIONERS_SONG,
      });

      expect(
        game.villainDeck.cards.find((card) => card.cardType === CardType.HERO)
      ).toBeDefined();
    });
  });

  describe.each(playerCounts)('Symbiotic Absorption', (players) => {
    it('should include the villain group from the "Drained" mastermind in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.VENOM.SYMBIOTIC_ABSORPTION,
      });

      expect(game.villainDeck.cards).toContain(
        (game.additionalDeck?.deck.cards.find(
          (card) => card.cardType === CardType.MASTERMIND
        ) as IMastermind).alwaysLeads[0]
      );
    });
  });

  describe.each(playerCounts)('Save Humanity', (players) => {
    it('should contain bystanders in the hero deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.DARK_CITY.SAVE_HUMANITY,
      });

      expect(game.heroDeck.numBystanders).toBeGreaterThan(0);
    });
  });

  describe.each(playerCounts)('Invade the Daily Bugle News HQ', (players) => {
    it('should contain a henchmen group in the hero deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.PAINT_THE_TOWN_RED.INVADE_THE_DAILY_BUGLE_NEWS_HQ,
      });

      expect(
        game.heroDeck.cards.filter(
          (card) => card.cardType === CardType.HENCHMEN
        ).length
      ).toBeGreaterThan(0);
    });
  });

  describe.each(playerCounts)('House of M', (players) => {
    let heroes: IHero[];
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.REVELATIONS.HOUSE_OF_M,
      });

      heroes = game.heroDeck.cards.filter(
        (card) => card.cardType === CardType.HERO
      );
    });

    it('should contain 4 X-Men heroes in the hero deck', () =>
      expect(heroes.filter((hero) => hero.team === Teams.X_MEN)).toHaveLength(
        4
      ));

    it('should contain 2 non-X-Men heroes in the hero deck', () =>
      expect(heroes.filter((hero) => hero.team !== Teams.X_MEN)).toHaveLength(
        2
      ));
  });

  describe.each(playerCounts)(
    'Deadpool kills the Marvel Universe',
    (players) => {
      it('should contain Deadpool in the hero deck', () => {
        game = setup.generateGame(players as numPlayers, {
          scheme: Schemes.DEADPOOL.DEADPOOL_KILLS_THE_MARVEL_UNIVERSE,
        });

        expect(game.heroDeck.cards).toContain(Heroes.DEADPOOL.DEADPOOL);
      });
    }
  );

  describe.each(playerCounts)('Deadpool writes a scheme', (players) => {
    it('should contain Deadpool in the hero deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.DEADPOOL.DEADPOOL_WRITES_A_SCHEME,
      });

      expect(game.heroDeck.cards).toContain(Heroes.DEADPOOL.DEADPOOL);
    });
  });

  describe.each(playerCounts)('Destroy the Nova Corps', (players) => {
    it('should contain only 1 Nova hero in the hero deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.INTO_THE_COSMOS.DESTROY_THE_NOVA_CORPS,
      });

      expect(
        game.heroDeck.cards.filter((hero) =>
          [Heroes.INTO_THE_COSMOS.NOVA, Heroes.CHAMPIONS.NOVA].includes(hero)
        )
      ).toHaveLength(1);
    });
  });

  describe.each(playerCounts)('Secret Empire of Betrayal', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.SHIELD.SECRET_EMPIRE_OF_BETRAYAL,
      });
    });

    describe('should have an additional deck', () => {
      it('called "Dark Loyalty"', () =>
        expect(game.additionalDeck?.name).toEqual('Dark Loyalty'));

      it('with 1 hero', () =>
        expect(
          game.additionalDeck?.deck.cards.filter(
            (card) => card.cardType === CardType.HERO
          )
        ).toHaveLength(1));
      it('with a hero that is not in the hero deck', () =>
        expect(game.heroDeck.cards).not.toContain(
          game.additionalDeck?.deck.cards
        ));
    });
  });

  describe.each(playerCounts)('Cytoplasm Spike Invasion', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.WORLD_WAR_HULK.CYTOPLASM_SPIKE_INVASION,
      });
    });

    describe('should have an additional deck', () => {
      it('called "Infected Deck"', () =>
        expect(game.additionalDeck?.name).toEqual('Infected Deck'));

      it('should contain Cytoplasm Spike henchmen', () =>
        expect(game.additionalDeck?.deck.cards).toContain(
          Henchmen.WORLD_WAR_HULK.CYTOPLASM_SPIKES
        ));

      it('should require 20 bystanders', () =>
        expect(game.additionalDeck?.deck.numBystanders).toEqual(20));
    });
  });

  describe.each(playerCounts)('Avengers vs X-Men', (players) => {
    let teamCount: { [team: string]: number };

    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.CIVIL_WAR.AVENGERS_VS_XMEN,
      });

      teamCount = {};
      game.heroDeck.cards
        .filter((card) => card.cardType === CardType.HERO)
        .forEach((hero: IHero) => {
          if (hero.team !== undefined)
            if (teamCount[hero.team.name] !== undefined) {
              teamCount[hero.team.name]++;
            } else {
              teamCount[hero.team.name] = 1;
            }
        });
    });

    it('should contain 2 hero teams in the hero deck', () => {
      expect(Object.keys(teamCount)).toHaveLength(2);
    });

    it('should have 3 heroes from each team', () => {
      expect(Object.values(teamCount)[0]).toEqual(3);
      expect(Object.values(teamCount)[1]).toEqual(3);
    });
  });

  describe.each(playerCounts)('Mutating Gamma Rays', (players) => {
    let hulkHeroes: IHero[];
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.WORLD_WAR_HULK.MUTATING_GAMMA_RAYS,
      });

      hulkHeroes = game.additionalDeck?.deck.cards.filter(
        (card) => card.cardType === CardType.HERO
      ) as IHero[];
    });

    describe('should have an additional deck', () => {
      it('called "Mutation Pile"', () =>
        expect(game.additionalDeck?.name).toEqual('Mutation Pile'));

      it('that contains 1 hero', () => expect(hulkHeroes).toHaveLength(1));

      it('that contains a hero with a "Hulk" name', () =>
        expect(
          hulkHeroes?.every((hero) => hero.name.toUpperCase().includes('HULK'))
        ).toBeTruthy());

      it('that contains a hero not in the hero deck', () =>
        expect(game.heroDeck.cards).not.toContain(hulkHeroes));
    });
  });

  describe.each(playerCounts)('Shoot Hulk into Space', (players) => {
    let hulkHeroes: IHero[];
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.WORLD_WAR_HULK.SHOOT_HULK_INTO_SPACE,
      });

      hulkHeroes = game.additionalDeck?.deck.cards.filter(
        (card) => card.cardType === CardType.HERO
      ) as IHero[];
    });

    describe('should have an additional deck', () => {
      it('called "Hulk Deck"', () =>
        expect(game.additionalDeck?.name).toEqual('Hulk Deck'));

      it('that contains 1 hero', () => expect(hulkHeroes).toHaveLength(1));

      it('that contains a hero with a "Hulk" name', () =>
        expect(
          hulkHeroes?.every((hero) => hero.name.toUpperCase().includes('HULK'))
        ).toBeTruthy());

      it('that contains a hero not in the hero deck', () =>
        expect(game.heroDeck.cards).not.toContain(hulkHeroes));
    });
  });

  describe.each(playerCounts)('World War Hulk', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.WORLD_WAR_HULK.WORLD_WAR_HULK,
      });
    });

    describe('should have an additional deck', () => {
      it('called "Lurking"', () =>
        expect(game.additionalDeck?.name).toEqual('Lurking'));

      it('that contains 3 masterminds', () =>
        expect(
          game.additionalDeck?.deck.cards.filter(
            (card) => card.cardType === CardType.MASTERMIND
          )
        ).toHaveLength(3));

      it('that does not contain the main mastermind', () =>
        expect(game.additionalDeck?.deck.cards).not.toContain(game.mastermind));
    });
  });

  describe.each(playerCounts)(
    'The Dark Phoenix Saga, with the Dark City deck',
    (players) => {
      beforeAll(() => {
        game = setup.generateGame(players as numPlayers, {
          scheme: Schemes.X_MEN.THE_DARK_PHOENIX_SAGA,
        });
      });

      it('should include the Hellfire club in the villain deck', () => {
        expect(game.villainDeck.cards).toContain(
          VillainGroups.X_MEN.HELLFIRE_CLUB
        );
      });

      it('should include Jean Grey in the villain deck', () => {
        expect(game.villainDeck.cards).toContain(Heroes.DARK_CITY.JEAN_GREY);
      });
    }
  );

  describe.each(playerCounts)(
    'The Dark Phoenix Saga, without the Dark City deck',
    (players) => {
      beforeAll(() => {
        game = new GameSetup(GameSets.LEGENDARY, GameSets.X_MEN).generateGame(
          players as numPlayers,
          {
            scheme: Schemes.X_MEN.THE_DARK_PHOENIX_SAGA,
          }
        );
      });

      it('should include the Hellfire club in the villain deck', () => {
        expect(game.villainDeck.cards).toContain(
          VillainGroups.X_MEN.HELLFIRE_CLUB
        );
      });

      it('should include Phoenix in the villain deck', () => {
        expect(game.villainDeck.cards).toContain(Heroes.X_MEN.PHOENIX);
      });
    }
  );

  describe.each(playerCounts)('Build an Army of Annihilation', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.SECRET_WARS_VOLUME_1.BUILD_AN_ARMY_OF_ANNIHILATION,
      });
    });

    it('should include 9 twists in the villain deck', () =>
      expect(game.villainDeck.numTwists).toEqual(9));

    describe('should have an additional deck', () => {
      it('called "KO pile"', () =>
        expect(game.additionalDeck?.name).toEqual('KO pile'));

      it('that contains 1 henchmen group', () =>
        expect(
          game.additionalDeck?.deck.cards.filter(
            (card) => card.cardType === CardType.HENCHMEN
          )
        ).toHaveLength(1));
    });
  });

  describe.each(playerCounts)(
    'Corrupt the next generaton of heroes',
    (players) => {
      beforeAll(() => {
        game = setup.generateGame(players as numPlayers, {
          scheme:
            Schemes.SECRET_WARS_VOLUME_1.CORRUPT_THE_NEXT_GENERATION_OF_HEROES,
        });
      });

      it('should include 10 sidekicks in the villain deck', () =>
        expect(game.villainDeck.numSidekicks).toEqual(10));
    }
  );

  describe.each(playerCounts)('Sinister Ambitions', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.SECRET_WARS_VOLUME_2.SINISTER_AMBITIONS,
      });
    });

    it('should include 6 twists in the villain deck', () =>
      expect(game.villainDeck.numTwists).toEqual(6));

    it('should include 10 ambitions in the villain deck', () =>
      expect(game.villainDeck.numAmbitions).toEqual(10));
  });

  describe.each(playerCounts)('Ruin the Perfect Wedding', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.REALM_OF_KINGS.RUIN_THE_PERFECT_WEDDING,
      });
    });

    it('should include 11 twists in the villain deck', () =>
      expect(game.villainDeck.numTwists).toEqual(11));

    describe('should have an additional deck', () => {
      it('called "Wedding Decks"', () =>
        expect(game.additionalDeck?.name).toEqual('Wedding Decks'));

      it('that contains 2 heroes', () =>
        expect(
          game.additionalDeck?.deck.cards.filter(
            (card) => card.cardType === CardType.HERO
          )
        ).toHaveLength(2));
    });
  });

  describe.each(playerCounts)('Distract the Hero', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.SPIDERMAN_HOMECOMING.DISTRACT_THE_HERO,
      });
    });

    it('should include a Spider Friends hero in the hero deck', () =>
      expect(
        game.heroDeck.cards.filter(
          (hero) => (hero as IHero).team === Teams.SPIDER_FRIENDS
        )
      ).toBeTruthy());
  });

  describe.each(playerCounts)('S.H.I.E.L.D vs Hydra War', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.SHIELD.SHIELD_VS_HYDRA_WAR,
      });
    });

    const hydraVillains = [
      VillainGroups.SHIELD.AIM_HYDRA_OFFSHOOT,
      VillainGroups.SHIELD.HYDRA_ELITE,
    ];
    it('should include AIM or Hydra Elite in the villain deck', () => {
      expect(
        game.villainDeck.cards.filter((item) => hydraVillains.includes(item))
      ).toHaveLength(1);
    });
  });

  describe.each(playerCounts)('Fall of the Hulks', (players) => {
    beforeAll(() => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.WORLD_WAR_HULK.FALL_OF_THE_HULKS,
      });
    });

    it('should include 2 Hulk heroes in the hero deck', () => {
      expect(
        game.heroDeck.cards.filter((item) =>
          item.name.toUpperCase().includes('HULK')
        )
      ).toHaveLength(2);
    });
  });

  describe('Trap Heroes in the Microverse', () => {
    it('should include the "Size Changing" keyword', () => {
      game = setup.generateGame(2, {
        scheme: Schemes.ANT_MAN.TRAP_HEROES_IN_THE_MICROVERSE,
      });
      expect(game.keywords).toContain(AntMan.SizeChanging);
    });
  });
});

describe('Specific Mastermind tests', () => {
  // Don't test for solo play because in solo the "Always leads" is ignored
  const playerCounts = [2, 3, 4, 5];

  beforeAll(() => {
    setup = new GameSetup(...GameSets.ALL);
  });

  describe.each(playerCounts)('Apocalypse', (players) => {
    it('should contain the Four Horsemen in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.LEGENDARY.MIDTOWN_BANK_ROBBERY,
        mastermind: Masterminds.DARK_CITY.APOCALYPSE,
      });

      expect(game.villainDeck.cards).toContain(
        VillainGroups.DARK_CITY.FOUR_HORSEMEN
      );
    });
  });

  describe.each(playerCounts)('Dr Doom', (players) => {
    it('should contain Doombots in the villain deck', () => {
      game = setup.generateGame(players as numPlayers, {
        scheme: Schemes.LEGENDARY.MIDTOWN_BANK_ROBBERY,
        mastermind: Masterminds.LEGENDARY.DR_DOOM,
      });
      expect(game.villainDeck.cards).toContain(
        Henchmen.LEGENDARY.DOOMBOT_LEGION
      );
    });
  });
});
