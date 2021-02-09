import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Teams } from '../teams';
import { Heroes } from './heroes';

cardSetTest(new Heroes(Object.values(Heroes.ANT_MAN)), 5, GameSets.ANT_MAN);

cardSetTest(
  new Heroes(Object.values(Heroes.CAPTAIN_AMERICA)),
  5,
  GameSets.CAPTAIN_AMERICA
);

cardSetTest(new Heroes(Object.values(Heroes.CHAMPIONS)), 5, GameSets.CHAMPIONS);

cardSetTest(
  new Heroes(Object.values(Heroes.CIVIL_WAR)),
  16,
  GameSets.CIVIL_WAR
);

cardSetTest(
  new Heroes(Object.values(Heroes.DARK_CITY)),
  17,
  GameSets.DARK_CITY
);

cardSetTest(new Heroes(Object.values(Heroes.DEADPOOL)), 5, GameSets.DEADPOOL);

cardSetTest(
  new Heroes(Object.values(Heroes.DIMENSIONS)),
  5,
  GameSets.DIMENSIONS
);

cardSetTest(
  new Heroes(Object.values(Heroes.FANTASTIC_FOUR)),
  5,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Heroes(Object.values(Heroes.FEAR_ITSELF)),
  6,
  GameSets.FEAR_ITSELF
);

cardSetTest(
  new Heroes(Object.values(Heroes.GUARDIANS_OF_THE_GALAXY)),
  5,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new Heroes(Object.values(Heroes.HEROES_OF_ASGARD)),
  5,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new Heroes(Object.values(Heroes.INTO_THE_COSMOS)),
  9,
  GameSets.INTO_THE_COSMOS
);

cardSetTest(
  new Heroes(Object.values(Heroes.LEGENDARY)),
  15,
  GameSets.LEGENDARY
);

cardSetTest(
  new Heroes(Object.values(Heroes.MARVEL_STUDIOS)),
  7,
  GameSets.MARVEL_STUDIOS
);

cardSetTest(
  new Heroes(Object.values(Heroes.NEW_MUTANTS)),
  5,
  GameSets.NEW_MUTANTS
);

cardSetTest(new Heroes(Object.values(Heroes.NOIR)), 5, GameSets.NOIR);

cardSetTest(
  new Heroes(Object.values(Heroes.PAINT_THE_TOWN_RED)),
  5,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(
  new Heroes(Object.values(Heroes.REALM_OF_KINGS)),
  5,
  GameSets.REALM_OF_KINGS
);
cardSetTest(
  new Heroes(Object.values(Heroes.REVELATIONS)),
  9,
  GameSets.REVELATIONS
);

cardSetTest(
  new Heroes(Object.values(Heroes.SECRET_WARS_VOLUME_1)),
  14,
  GameSets.SECRET_WARS_VOLUME_1
);

cardSetTest(
  new Heroes(Object.values(Heroes.SECRET_WARS_VOLUME_2)),
  16,
  GameSets.SECRET_WARS_VOLUME_2
);

cardSetTest(new Heroes(Object.values(Heroes.SHIELD)), 4, GameSets.SHIELD);

cardSetTest(
  new Heroes(Object.values(Heroes.SPIDERMAN_HOMECOMING)),
  5,
  GameSets.SPIDERMAN_HOMECOMING
);

cardSetTest(new Heroes(Object.values(Heroes.THREE_D)), 2, GameSets.THREE_D);

cardSetTest(new Heroes(Object.values(Heroes.VENOM)), 5, GameSets.VENOM);

cardSetTest(new Heroes(Object.values(Heroes.VILLAINS)), 15, GameSets.VILLAINS);

cardSetTest(
  new Heroes(Object.values(Heroes.WORLD_WAR_HULK)),
  15,
  GameSets.WORLD_WAR_HULK
);

cardSetTest(new Heroes(Object.values(Heroes.X_MEN)), 15, GameSets.X_MEN);

cardSetTest(
  new Heroes(Object.values(Heroes.WORLD_WAR_HULK)),
  15,
  GameSets.WORLD_WAR_HULK
);

describe('X-Men heroes', () => {
  it('should all be in the X-Men team', () => {
    expect(
      Object.values(Heroes.X_MEN).every((item) => item.team === Teams.X_MEN)
    );
  });
});

describe('Total Heroes sets', () => {
  let total: number;

  beforeAll(() => {
    total = [
      ...Object.values(Heroes.ANT_MAN),
      ...Object.values(Heroes.CAPTAIN_AMERICA),
      ...Object.values(Heroes.CHAMPIONS),
      ...Object.values(Heroes.CIVIL_WAR),
      ...Object.values(Heroes.DARK_CITY),
      ...Object.values(Heroes.DEADPOOL),
      ...Object.values(Heroes.DIMENSIONS),
      ...Object.values(Heroes.FANTASTIC_FOUR),
      ...Object.values(Heroes.FEAR_ITSELF),
      ...Object.values(Heroes.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(Heroes.HEROES_OF_ASGARD),
      ...Object.values(Heroes.INTO_THE_COSMOS),
      ...Object.values(Heroes.LEGENDARY),
      ...Object.values(Heroes.MARVEL_STUDIOS),
      ...Object.values(Heroes.NEW_MUTANTS),
      ...Object.values(Heroes.NOIR),
      ...Object.values(Heroes.PAINT_THE_TOWN_RED),
      ...Object.values(Heroes.REALM_OF_KINGS),
      ...Object.values(Heroes.REVELATIONS),
      ...Object.values(Heroes.SECRET_WARS_VOLUME_1),
      ...Object.values(Heroes.SECRET_WARS_VOLUME_2),
      ...Object.values(Heroes.SHIELD),
      ...Object.values(Heroes.SPIDERMAN_HOMECOMING),
      ...Object.values(Heroes.THREE_D),
      ...Object.values(Heroes.VENOM),
      ...Object.values(Heroes.VILLAINS),
      ...Object.values(Heroes.WORLD_WAR_HULK),
      ...Object.values(Heroes.X_MEN),
    ].length;
  });

  // @ts-ignore
  it(`should include all entries`, () =>
    expect(Heroes.ALL).toHaveLength(total));
});
