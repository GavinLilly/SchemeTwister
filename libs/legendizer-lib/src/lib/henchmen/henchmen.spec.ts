import { Henchmen } from './henchmen';
import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';

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

describe('Total Henchmen sets', () => {
  const total: number = [
    ...Object.values(Henchmen.LEGENDARY),
    ...Object.values(Henchmen.DARK_CITY),
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Henchmen.ALL).toHaveLength(total));
});
