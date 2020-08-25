import { GameSets, IGameSet } from '../gamesets';
import { Henchmen } from '../henchmen';
import { Heroes } from '../heroes';
import { Masterminds } from '../masterminds';
import { Schemes } from '../schemes';
import { VillainGroups } from '../villains';
import { GameSetup } from './gameSetup';
import { IGameSetup } from './gameSetup.interface';

function testBigBox(gameSet: IGameSet) {
  const setup: GameSetup = new GameSetup(gameSet);
  const game: IGameSetup = setup.generateGame(2);
  describe(`Test ${gameSet.name} setup`, () => {
    it(`should only contain ${gameSet.name} cards`, () => {
      expect(game.scheme.gameSet).toBe(gameSet);
      expect(game.mastermind.gameSet).toBe(gameSet);
      expect(
        game.heroDeck.heroes.every((item) => item.gameSet === gameSet)
      ).toBeTruthy();
      expect(
        game.villainDeck.henchmen.every((item) => item.gameSet === gameSet)
      ).toBeTruthy();
      expect(
        game.villainDeck.villains.every((item) => item.gameSet === gameSet)
      ).toBeTruthy();
      if (game.villainDeck.heroes !== undefined)
        expect(
          game.villainDeck.heroes.every((hero) => hero.gameSet === gameSet)
        ).toBeTruthy();
    });
  });
}

describe('Class creation', () => {
  it('should create with all Gamesets', () => {
    expect(new GameSetup(...GameSets.ALL)).toBeTruthy();
  });

  it('should fail with no Gameset', () => {
    expect(() => new GameSetup(undefined)).toThrow(Error);
  });

  it('should fail with an empty Gameset', () => {
    expect(() => new GameSetup(...[])).toThrow(Error);
  });

  it('should fail without a big box game set', () => {
    expect(
      () => new GameSetup(...GameSets.ALL.filter((item) => !item.essential))
    ).toThrow(Error);
  });
});

describe('Game creation', () => {
  const setup: GameSetup = new GameSetup(...GameSets.ALL);
  let game: IGameSetup;

  it('should fail if number of players is undefined', () => {
    expect(() => {
      game = setup.generateGame(undefined);
    }).toThrow(Error);
  });

  game = setup.generateGame(2);

  it('should have a scheme', () => expect(game.scheme).toBeTruthy());
  it('should have a mastermind', () => expect(game.mastermind).toBeTruthy());
  it('should have some heroes', () =>
    expect(game.heroDeck.heroes.length).toBeGreaterThan(0));
  it('should have some villains', () =>
    expect(game.villainDeck.villains.length).toBeGreaterThan(0));
  it('should have some henchmen', () =>
    expect(game.villainDeck.henchmen.length).toBeGreaterThan(0));
  it('should have 2 players', () => expect(game.numPlayers).toEqual(2));
});

describe('Test villain deck setup', () => {
  const setup: GameSetup = new GameSetup(
    GameSets.LEGENDARY,
    GameSets.DARK_CITY
  );
  let game: IGameSetup;

  // Check scheme setups
  it('should put Jean Grey in the villain deck', () => {
    game = setup.generateGame(
      2,
      Schemes.DARK_CITY.TRANSFORM_CITIZENS_INTO_DEMONS
    );
    expect(game.villainDeck.heroes).toContain(Heroes.DARK_CITY.JEAN_GREY);
    expect(game.heroDeck.heroes).not.toContain(Heroes.DARK_CITY.JEAN_GREY);
  });
  it('should put Skrulls in the villain deck', () => {
    game = setup.generateGame(
      2,
      Schemes.LEGENDARY.SECRET_INVASION_OF_THE_SKRULL_SHAPESHIFTERS
    );
    expect(game.villainDeck.villains).toContain(
      VillainGroups.LEGENDARY.SKRULLS
    );
  });
  it('should put Maggia Goons in the villain deck', () => {
    game = setup.generateGame(2, Schemes.DARK_CITY.ORGANIZED_CRIME_WAVE);
    expect(game.villainDeck.henchmen).toContain(
      Henchmen.DARK_CITY.MAGGIA_GOONS
    );
  });
  it('should put a hero in the villain deck', () => {
    game = setup.generateGame(2, Schemes.DARK_CITY.XCUTIONERS_SONG);
    expect(game.villainDeck.heroes.length).toBeGreaterThan(0);
  })
  it('should contain bystanders in the hero deck', () => {
    game = setup.generateGame(2, Schemes.DARK_CITY.SAVE_HUMANITY);
    expect(game.heroDeck.bystanders).toBeTruthy();
  })

  // Check Mastermind setups
  it('should put Doombots in the villain deck', () => {
    game = setup.generateGame(2, undefined, Masterminds.LEGENDARY.DR_DOOM);
    expect(game.villainDeck.henchmen).toContain(Henchmen.LEGENDARY.DOOMBOT_LEGION);
  })
  it('should put Four Horsemen in the villain deck', () => {
    game = setup.generateGame(2, undefined, Masterminds.DARK_CITY.APOCALYPSE);
    expect(game.villainDeck.villains).toContain(VillainGroups.DARK_CITY.FOUR_HORSEMEN);
  })

});

GameSets.ALL.forEach((element) => {
  if (element.essential) testBigBox(element);
});
