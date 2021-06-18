import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Masterminds } from './masterminds';

cardSetTest(
  new Masterminds(Object.values(Masterminds.ANT_MAN)),
  4,
  GameSets.ANT_MAN
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.CAPTAIN_AMERICA)),
  2,
  GameSets.CAPTAIN_AMERICA
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.CHAMPIONS)),
  4,
  GameSets.CHAMPIONS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.CIVIL_WAR)),
  5,
  GameSets.CIVIL_WAR
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.DARK_CITY)),
  5,
  GameSets.DARK_CITY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.DEADPOOL)),
  2,
  GameSets.DEADPOOL
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.DIMENSIONS)),
  2,
  GameSets.DIMENSIONS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.FANTASTIC_FOUR)),
  2,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.FEAR_ITSELF)),
  1,
  GameSets.FEAR_ITSELF
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY)),
  2,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.HEROES_OF_ASGARD)),
  4,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.INTO_THE_COSMOS)),
  6,
  GameSets.INTO_THE_COSMOS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.LEGENDARY)),
  4,
  GameSets.LEGENDARY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.MARVEL_STUDIOS)),
  3,
  GameSets.MARVEL_STUDIOS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.NEW_MUTANTS)),
  4,
  GameSets.NEW_MUTANTS
);

cardSetTest(new Masterminds(Object.values(Masterminds.NOIR)), 2, GameSets.NOIR);

cardSetTest(
  new Masterminds(Object.values(Masterminds.PAINT_THE_TOWN_RED)),
  2,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.REALM_OF_KINGS)),
  4,
  GameSets.REALM_OF_KINGS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.REVELATIONS)),
  6,
  GameSets.REVELATIONS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.SECRET_WARS_VOLUME_1)),
  4,
  GameSets.SECRET_WARS_VOLUME_1
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.SECRET_WARS_VOLUME_2)),
  4,
  GameSets.SECRET_WARS_VOLUME_2
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.SHIELD)),
  2,
  GameSets.SHIELD
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.SPIDERMAN_HOMECOMING)),
  4,
  GameSets.SPIDERMAN_HOMECOMING
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.VENOM)),
  4,
  GameSets.VENOM
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.VILLAINS)),
  4,
  GameSets.VILLAINS
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.WORLD_WAR_HULK)),
  6,
  GameSets.WORLD_WAR_HULK
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.X_MEN)),
  12,
  GameSets.X_MEN
);

describe('Total Masterminds sets', () => {
  let total: number;

  beforeAll(() => {
    total = [
      ...Object.values(Masterminds.ANT_MAN),
      ...Object.values(Masterminds.CAPTAIN_AMERICA),
      ...Object.values(Masterminds.CHAMPIONS),
      ...Object.values(Masterminds.CIVIL_WAR),
      ...Object.values(Masterminds.DARK_CITY),
      ...Object.values(Masterminds.DEADPOOL),
      ...Object.values(Masterminds.DIMENSIONS),
      ...Object.values(Masterminds.FANTASTIC_FOUR),
      ...Object.values(Masterminds.FEAR_ITSELF),
      ...Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(Masterminds.HEROES_OF_ASGARD),
      ...Object.values(Masterminds.INTO_THE_COSMOS),
      ...Object.values(Masterminds.LEGENDARY),
      ...Object.values(Masterminds.MARVEL_STUDIOS),
      ...Object.values(Masterminds.NEW_MUTANTS),
      ...Object.values(Masterminds.NOIR),
      ...Object.values(Masterminds.PAINT_THE_TOWN_RED),
      ...Object.values(Masterminds.REALM_OF_KINGS),
      ...Object.values(Masterminds.REVELATIONS),
      ...Object.values(Masterminds.SECRET_WARS_VOLUME_1),
      ...Object.values(Masterminds.SECRET_WARS_VOLUME_2),
      ...Object.values(Masterminds.SHIELD),
      ...Object.values(Masterminds.SPIDERMAN_HOMECOMING),
      ...Object.values(Masterminds.VENOM),
      ...Object.values(Masterminds.VILLAINS),
      ...Object.values(Masterminds.WORLD_WAR_HULK),
      ...Object.values(Masterminds.X_MEN),
    ].length;
  });

  // @ts-ignore
  it(`should have ${total} entries`, () =>
    expect(Masterminds.ALL).toHaveLength(total));
});
