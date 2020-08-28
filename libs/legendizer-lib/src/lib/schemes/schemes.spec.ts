import { GameSets } from '../gamesets';
import { GameSetup } from '../gameSetup';
import { cardSetTest } from '../genericTests';
import { VillainGroups } from '../villains';
import { Schemes } from './schemes';

cardSetTest(
  new Schemes(Object.values(Schemes.LEGENDARY)),
  8,
  GameSets.LEGENDARY
);

cardSetTest(
  new Schemes(Object.values(Schemes.DARK_CITY)),
  8,
  GameSets.DARK_CITY
);

cardSetTest(
  new Schemes(Object.values(Schemes.HEROES_OF_ASGARD)),
  4,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new Schemes(Object.values(Schemes.GUARDIANS_OF_THE_GALAXY)),
  4,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(new Schemes(Object.values(Schemes.ANT_MAN)), 4, GameSets.ANT_MAN);

cardSetTest(
  new Schemes(Object.values(Schemes.FANTASTIC_FOUR)),
  4,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Schemes(Object.values(Schemes.PAINT_THE_TOWN_RED)),
  4,
  GameSets.PAINT_THE_TOWN_RED
);

describe('Specific scheme checks', () => {
  it('should have Kree and Skrull villains', () => {
    const setup: GameSetup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.GUARDIANS_OF_THE_GALAXY
    );
    const gameSetup = setup.generateGame(
      2,
      Schemes.GUARDIANS_OF_THE_GALAXY.THE_KREE_SKRULL_WAR
    );
    expect(gameSetup.villainDeck.villains).toContain(
      VillainGroups.GUARDIANS_OF_THE_GALAXY.KREE_STARFORCE
    );
    expect(gameSetup.villainDeck.villains).toContain(
      VillainGroups.LEGENDARY.SKRULLS
    );
  });

  it('should contain the Sinister Six villains', () => {
    const setup: GameSetup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.PAINT_THE_TOWN_RED
    );
    const gameSetup = setup.generateGame(
      2,
      Schemes.PAINT_THE_TOWN_RED.SPLICE_HUMANS_WITH_SPIDER_DNA
    );
    expect(gameSetup.villainDeck.villains).toContain(
      VillainGroups.PAINT_THE_TOWN_RED.SINISTER_SIX
    );
  });

  it('should contain a henchmen group in the hero deck', () => {
    const setup: GameSetup = new GameSetup(
      GameSets.LEGENDARY,
      GameSets.PAINT_THE_TOWN_RED
    );
    const gameSetup = setup.generateGame(
      2,
      Schemes.PAINT_THE_TOWN_RED.INVADE_THE_DAILY_BUGLE_NEWS_HQ
    );
    expect(gameSetup.heroDeck.henchmen).toBeTruthy();
    expect(gameSetup.heroDeck.henchmen.length).toBeGreaterThan(0);
  })
});

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Schemes.ANT_MAN),
    ...Object.values(Schemes.FANTASTIC_FOUR),
    ...Object.values(Schemes.PAINT_THE_TOWN_RED)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
