import { Schemes } from './schemes';
import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';

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

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
