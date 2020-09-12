import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { VillainGroups } from './villainGroups';

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.LEGENDARY)),
  7,
  GameSets.LEGENDARY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.DARK_CITY)),
  6,
  GameSets.DARK_CITY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.HEROES_OF_ASGARD)),
  2,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY)),
  2,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.ANT_MAN)),
  2,
  GameSets.ANT_MAN
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.FANTASTIC_FOUR)),
  2,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new VillainGroups(Object.values(VillainGroups.PAINT_THE_TOWN_RED)),
  2,
  GameSets.PAINT_THE_TOWN_RED
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
      ...Object.values(VillainGroups.LEGENDARY),
      ...Object.values(VillainGroups.DARK_CITY),
      ...Object.values(VillainGroups.HEROES_OF_ASGARD),
      ...Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(VillainGroups.ANT_MAN),
      ...Object.values(VillainGroups.FANTASTIC_FOUR),
      ...Object.values(VillainGroups.PAINT_THE_TOWN_RED),
      ...Object.values(VillainGroups.X_MEN)
    ].length
  });

  it(`should have ${total} entries`, () =>
    expect(VillainGroups.ALL).toHaveLength(total));
});
