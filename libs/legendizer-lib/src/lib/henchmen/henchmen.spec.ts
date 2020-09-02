import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Henchmen } from './henchmen';

cardSetTest(
  new Henchmen(Object.values(Henchmen.LEGENDARY)),
  4,
  GameSets.LEGENDARY
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.DARK_CITY)),
  2,
  GameSets.DARK_CITY
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.X_MEN)),
  5,
  GameSets.X_MEN
);

describe('Total Henchmen sets', () => {
  const total: number = [
    ...Object.values(Henchmen.LEGENDARY),
    ...Object.values(Henchmen.DARK_CITY),
    ...Object.values(Henchmen.X_MEN)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Henchmen.ALL).toHaveLength(total));
});
