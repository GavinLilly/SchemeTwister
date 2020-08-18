import { VillainGroups } from './villainGroups';
import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';

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

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(VillainGroups.LEGENDARY),
    ...Object.values(VillainGroups.DARK_CITY),
    ...Object.values(VillainGroups.HEROES_OF_ASGARD),
    ...Object.values(VillainGroups.GUARDIANS_OF_THE_GALAXY)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(VillainGroups.ALL).toHaveLength(total));
});
