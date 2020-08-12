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

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
