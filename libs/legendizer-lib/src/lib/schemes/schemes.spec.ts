import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Schemes } from './schemes';

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

cardSetTest(
  new Schemes(Object.values(Schemes.GUARDIANS_OF_THE_GALAXY)),
  4,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(new Schemes(Object.values(Schemes.ANT_MAN)), 4, GameSets.ANT_MAN);

cardSetTest(
  new Schemes(Object.values(Schemes.FANTASTIC_FOUR)),
  4,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Schemes(Object.values(Schemes.PAINT_THE_TOWN_RED)),
  4,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(new Schemes(Object.values(Schemes.X_MEN)), 8, GameSets.X_MEN);

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Schemes.ANT_MAN),
    ...Object.values(Schemes.FANTASTIC_FOUR),
    ...Object.values(Schemes.PAINT_THE_TOWN_RED),
    ...Object.values(Schemes.X_MEN),
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
