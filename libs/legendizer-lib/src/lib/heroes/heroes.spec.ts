import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Teams } from '../teams';
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

cardSetTest(new Heroes(Object.values(Heroes.ANT_MAN)), 5, GameSets.ANT_MAN);

cardSetTest(
  new Heroes(Object.values(Heroes.FANTASTIC_FOUR)),
  5,
  GameSets.FANTASTIC_FOUR
);

cardSetTest(
  new Heroes(Object.values(Heroes.PAINT_THE_TOWN_RED)),
  5,
  GameSets.PAINT_THE_TOWN_RED
);

cardSetTest(new Heroes(Object.values(Heroes.X_MEN)), 15, GameSets.X_MEN);

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
      ...Object.values(Heroes.LEGENDARY),
      ...Object.values(Heroes.DARK_CITY),
      ...Object.values(Heroes.HEROES_OF_ASGARD),
      ...Object.values(Heroes.GUARDIANS_OF_THE_GALAXY),
      ...Object.values(Heroes.ANT_MAN),
      ...Object.values(Heroes.FANTASTIC_FOUR),
      ...Object.values(Heroes.PAINT_THE_TOWN_RED),
      ...Object.values(Heroes.X_MEN),
    ].length
  });

  // @ts-ignore
  it(`should have ${total} entries`, () =>
    expect(Heroes.ALL).toHaveLength(total));
});
