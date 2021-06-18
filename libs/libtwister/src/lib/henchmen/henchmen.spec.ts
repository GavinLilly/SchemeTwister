import { GameSets } from '../gamesets';
import { cardSetTest } from '../genericTests';
import { Henchmen } from './henchmen';

cardSetTest(
  new Henchmen(Object.values(Henchmen.CIVIL_WAR)),
  2,
  GameSets.CIVIL_WAR
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.DIMENSIONS)),
  2,
  GameSets.DIMENSIONS
);

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
  new Henchmen(Object.values(Henchmen.INTO_THE_COSMOS)),
  2,
  GameSets.INTO_THE_COSMOS
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.MARVEL_STUDIOS)),
  4,
  GameSets.MARVEL_STUDIOS
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.REVELATIONS)),
  2,
  GameSets.REVELATIONS
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.SECRET_WARS_VOLUME_1)),
  3,
  GameSets.SECRET_WARS_VOLUME_1
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.SECRET_WARS_VOLUME_2)),
  3,
  GameSets.SECRET_WARS_VOLUME_2
);

cardSetTest(
  new Henchmen(Object.values(Henchmen.VILLAINS)),
  4,
  GameSets.VILLAINS
);

cardSetTest(new Henchmen(Object.values(Henchmen.X_MEN)), 5, GameSets.X_MEN);

cardSetTest(
  new Henchmen(Object.values(Henchmen.WORLD_WAR_HULK)),
  3,
  GameSets.WORLD_WAR_HULK
);

describe('Total Henchmen sets', () => {
  let total: number;

  beforeAll(() => {
    total = [
      ...Object.values(Henchmen.CIVIL_WAR),
      ...Object.values(Henchmen.DARK_CITY),
      ...Object.values(Henchmen.DIMENSIONS),
      ...Object.values(Henchmen.INTO_THE_COSMOS),
      ...Object.values(Henchmen.LEGENDARY),
      ...Object.values(Henchmen.MARVEL_STUDIOS),
      ...Object.values(Henchmen.REVELATIONS),
      ...Object.values(Henchmen.SECRET_WARS_VOLUME_1),
      ...Object.values(Henchmen.SECRET_WARS_VOLUME_2),
      ...Object.values(Henchmen.VILLAINS),
      ...Object.values(Henchmen.X_MEN),
      ...Object.values(Henchmen.WORLD_WAR_HULK),
    ].length;
  });

  // @ts-ignore
  it(`should have ${total} entries`, () =>
    expect(Henchmen.ALL).toHaveLength(total));
});
