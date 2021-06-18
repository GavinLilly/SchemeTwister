import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Schemes } from './schemes';

cardSetTest(new Schemes(Object.values(Schemes.ANT_MAN)), 4, GameSets.ANT_MAN);

cardSetTest(
  new Schemes(Object.values(Schemes.CAPTAIN_AMERICA)),
  4,
  GameSets.CAPTAIN_AMERICA
);

cardSetTest(
  new Schemes(Object.values(Schemes.CHAMPIONS)),
  4,
  GameSets.CHAMPIONS
);

cardSetTest(
  new Schemes(Object.values(Schemes.CIVIL_WAR)),
  8,
  GameSets.CIVIL_WAR
);

cardSetTest(
  new Schemes(Object.values(Schemes.DARK_CITY)),
  8,
  GameSets.DARK_CITY
);

cardSetTest(new Schemes(Object.values(Schemes.DEADPOOL)), 4, GameSets.DEADPOOL);

cardSetTest(
  new Schemes(Object.values(Schemes.FANTASTIC_FOUR)),
  4,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Schemes(Object.values(Schemes.FEAR_ITSELF)),
  3,
  GameSets.FEAR_ITSELF
);

cardSetTest(
  new Schemes(Object.values(Schemes.GUARDIANS_OF_THE_GALAXY)),
  4,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new Schemes(Object.values(Schemes.HEROES_OF_ASGARD)),
  4,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new Schemes(Object.values(Schemes.INTO_THE_COSMOS)),
  4,
  GameSets.INTO_THE_COSMOS
);

cardSetTest(
  new Schemes(Object.values(Schemes.LEGENDARY)),
  8,
  GameSets.LEGENDARY
);

cardSetTest(
  new Schemes(Object.values(Schemes.MARVEL_STUDIOS)),
  8,
  GameSets.MARVEL_STUDIOS
);

cardSetTest(
  new Schemes(Object.values(Schemes.NEW_MUTANTS)),
  4,
  GameSets.NEW_MUTANTS
);

cardSetTest(new Schemes(Object.values(Schemes.NOIR)), 4, GameSets.NOIR);

cardSetTest(
  new Schemes(Object.values(Schemes.PAINT_THE_TOWN_RED)),
  4,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(
  new Schemes(Object.values(Schemes.REALM_OF_KINGS)),
  4,
  GameSets.REALM_OF_KINGS
);

cardSetTest(
  new Schemes(Object.values(Schemes.REVELATIONS)),
  4,
  GameSets.REVELATIONS
);

cardSetTest(
  new Schemes(Object.values(Schemes.SECRET_WARS_VOLUME_1)),
  8,
  GameSets.SECRET_WARS_VOLUME_1
);

cardSetTest(
  new Schemes(Object.values(Schemes.SECRET_WARS_VOLUME_2)),
  8,
  GameSets.SECRET_WARS_VOLUME_2
);

cardSetTest(new Schemes(Object.values(Schemes.SHIELD)), 4, GameSets.SHIELD);

cardSetTest(
  new Schemes(Object.values(Schemes.SPIDERMAN_HOMECOMING)),
  4,
  GameSets.SPIDERMAN_HOMECOMING
);

cardSetTest(new Schemes(Object.values(Schemes.VENOM)), 4, GameSets.VENOM);

cardSetTest(new Schemes(Object.values(Schemes.VILLAINS)), 8, GameSets.VILLAINS);

cardSetTest(
  new Schemes(Object.values(Schemes.WORLD_WAR_HULK)),
  8,
  GameSets.WORLD_WAR_HULK
);

cardSetTest(new Schemes(Object.values(Schemes.X_MEN)), 8, GameSets.X_MEN);

describe('Total Schemes sets', () => {
  let total: number;

  beforeAll(() => {
    total = [
      ...Object.values(Schemes.ANT_MAN),
      ...Object.values(Schemes.CAPTAIN_AMERICA),
      ...Object.values(Schemes.CHAMPIONS),
      ...Object.values(Schemes.CIVIL_WAR),
      ...Object.values(Schemes.DARK_CITY),
      ...Object.values(Schemes.DEADPOOL),
      ...Object.values(Schemes.FANTASTIC_FOUR),
      ...Object.values(Schemes.FEAR_ITSELF),
      ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(Schemes.HEROES_OF_ASGARD),
      ...Object.values(Schemes.INTO_THE_COSMOS),
      ...Object.values(Schemes.LEGENDARY),
      ...Object.values(Schemes.MARVEL_STUDIOS),
      ...Object.values(Schemes.NEW_MUTANTS),
      ...Object.values(Schemes.NOIR),
      ...Object.values(Schemes.PAINT_THE_TOWN_RED),
      ...Object.values(Schemes.REALM_OF_KINGS),
      ...Object.values(Schemes.REVELATIONS),
      ...Object.values(Schemes.SECRET_WARS_VOLUME_1),
      ...Object.values(Schemes.SECRET_WARS_VOLUME_2),
      ...Object.values(Schemes.SHIELD),
      ...Object.values(Schemes.SPIDERMAN_HOMECOMING),
      ...Object.values(Schemes.VENOM),
      ...Object.values(Schemes.VILLAINS),
      ...Object.values(Schemes.WORLD_WAR_HULK),
      ...Object.values(Schemes.X_MEN),
    ].length;
  });

  // @ts-ignore
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
