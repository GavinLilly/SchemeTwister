import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { VillainGroups } from './villainGroups';

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.ANT_MAN)),
  2,
  GameSets.ANT_MAN
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.CAPTAIN_AMERICA)),
  2,
  GameSets.CAPTAIN_AMERICA
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.CHAMPIONS)),
  2,
  GameSets.CHAMPIONS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.CIVIL_WAR)),
  7,
  GameSets.CIVIL_WAR
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.DARK_CITY)),
  6,
  GameSets.DARK_CITY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.DEADPOOL)),
  2,
  GameSets.DEADPOOL
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.FANTASTIC_FOUR)),
  2,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.FEAR_ITSELF)),
  1,
  GameSets.FEAR_ITSELF
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY)),
  2,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.HEROES_OF_ASGARD)),
  2,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.INTO_THE_COSMOS)),
  4,
  GameSets.INTO_THE_COSMOS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.LEGENDARY)),
  7,
  GameSets.LEGENDARY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.MARVEL_STUDIOS)),
  5,
  GameSets.MARVEL_STUDIOS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.NEW_MUTANTS)),
  2,
  GameSets.NEW_MUTANTS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.NOIR)),
  2,
  GameSets.NOIR
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.PAINT_THE_TOWN_RED)),
  2,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.REALM_OF_KINGS)),
  2,
  GameSets.REALM_OF_KINGS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.REVELATIONS)),
  4,
  GameSets.REVELATIONS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.SECRET_WARS_VOLUME_1)),
  6,
  GameSets.SECRET_WARS_VOLUME_1
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.SECRET_WARS_VOLUME_2)),
  6,
  GameSets.SECRET_WARS_VOLUME_2
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.SHIELD)),
  2,
  GameSets.SHIELD
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.SPIDERMAN_HOMECOMING)),
  2,
  GameSets.SPIDERMAN_HOMECOMING
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups["VENOM"])),
  2,
  GameSets["VENOM"]
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.VILLAINS)),
  7,
  GameSets.VILLAINS
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.WORLD_WAR_HULK)),
  7,
  GameSets.WORLD_WAR_HULK
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.X_MEN)),
  7,
  GameSets.X_MEN
);

describe('Total Schemes sets', () => {
  let total: number;

  beforeAll(() => {
    total = [
      ...Object.values(VillainGroups.ANT_MAN),
      ...Object.values(VillainGroups.CAPTAIN_AMERICA),
      ...Object.values(VillainGroups.CHAMPIONS),
      ...Object.values(VillainGroups.CIVIL_WAR),
      ...Object.values(VillainGroups.DARK_CITY),
      ...Object.values(VillainGroups.DEADPOOL),
      ...Object.values(VillainGroups.FANTASTIC_FOUR),
      ...Object.values(VillainGroups.FEAR_ITSELF),
      ...Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(VillainGroups.HEROES_OF_ASGARD),
      ...Object.values(VillainGroups.INTO_THE_COSMOS),
      ...Object.values(VillainGroups.LEGENDARY),
      ...Object.values(VillainGroups.MARVEL_STUDIOS),
      ...Object.values(VillainGroups.NEW_MUTANTS),
      ...Object.values(VillainGroups.NOIR),
      ...Object.values(VillainGroups.PAINT_THE_TOWN_RED),
      ...Object.values(VillainGroups.REALM_OF_KINGS),
      ...Object.values(VillainGroups.REVELATIONS),
      ...Object.values(VillainGroups.SECRET_WARS_VOLUME_1),
      ...Object.values(VillainGroups.SECRET_WARS_VOLUME_2),
      ...Object.values(VillainGroups.SHIELD),
      ...Object.values(VillainGroups.SPIDERMAN_HOMECOMING),
      ...Object.values(VillainGroups.VENOM),
      ...Object.values(VillainGroups.VILLAINS),
      ...Object.values(VillainGroups.WORLD_WAR_HULK),
      ...Object.values(VillainGroups.X_MEN),
    ].length;
  });

  // @ts-ignore
  it(`should have ${total} entries`, () =>
    expect(VillainGroups.ALL).toHaveLength(total));
});
