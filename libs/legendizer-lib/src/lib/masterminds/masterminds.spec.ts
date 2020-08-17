import { Masterminds } from './masterminds';
import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';

cardSetTest(
  new Masterminds(Object.values(Masterminds.LEGENDARY)),
  4,
  GameSets.LEGENDARY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.DARK_CITY)),
  5,
  GameSets.DARK_CITY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.HEROES_OF_ASGARD)),
  4,
  GameSets.HEROES_OF_ASGARD
);

describe('Total Masterminds sets', () => {
  const total: number = [
    ...Object.values(Masterminds.LEGENDARY),
    ...Object.values(Masterminds.DARK_CITY),
    ...Object.values(Masterminds.HEROES_OF_ASGARD)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Masterminds.ALL).toHaveLength(total));
});
