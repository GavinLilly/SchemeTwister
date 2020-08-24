import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Masterminds } from './masterminds';

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

cardSetTest(
  new Masterminds(Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY)),
  2,
  GameSets.GUARDIANS_OF_THE_GALAXY
);

cardSetTest(
  new Masterminds(Object.values(Masterminds.ANT_MAN)),
  4,
  GameSets.ANT_MAN
);

describe('Total Masterminds sets', () => {
  const total: number = [
    ...Object.values(Masterminds.LEGENDARY),
    ...Object.values(Masterminds.DARK_CITY),
    ...Object.values(Masterminds.HEROES_OF_ASGARD),
    ...Object.values(Masterminds.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Masterminds.ANT_MAN)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Masterminds.ALL).toHaveLength(total));
});
