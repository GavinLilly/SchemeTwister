import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Heroes } from './heroes';

cardSetTest(
  new Heroes(Object.values(Heroes.LEGENDARY)),
  15,
  GameSets.LEGENDARY
);

cardSetTest(
  new Heroes(Object.values(Heroes.DARK_CITY)),
  17,
  GameSets.DARK_CITY
);

cardSetTest(
  new Heroes(Object.values(Heroes.HEROES_OF_ASGARD)),
  5,
  GameSets.HEROES_OF_ASGARD
);

cardSetTest(
  new Heroes(Object.values(Heroes.GUARDIANS_OF_THE_GALAXY)),
  5,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

describe('Total Heroes sets', () => {
  const total: number = [
    ...Object.values(Heroes.LEGENDARY),
    ...Object.values(Heroes.DARK_CITY),
    ...Object.values(Heroes.HEROES_OF_ASGARD),
    ...Object.values(Heroes.GUARDIANS_OF_THE_GALAXY)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Heroes.ALL).toHaveLength(total));
});
