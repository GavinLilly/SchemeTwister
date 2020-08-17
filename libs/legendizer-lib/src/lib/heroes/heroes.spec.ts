import { Heroes } from './heroes';
import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';

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

describe('Total Heroes sets', () => {
  const total: number = [
    ...Object.values(Heroes.LEGENDARY),
    ...Object.values(Heroes.DARK_CITY),
    ...Object.values(Heroes.HEROES_OF_ASGARD)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Heroes.ALL).toHaveLength(total));
});
