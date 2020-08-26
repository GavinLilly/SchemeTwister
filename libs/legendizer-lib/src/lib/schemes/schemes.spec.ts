import { GameSets } from '../gamesets';
import { GameSetup } from '../gameSetup';
import { cardSetTest } from '../genericTests';
import { VillainGroups } from '../villains';
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

cardSetTest(
  new Schemes(Object.values(Schemes.ANT_MAN)),
  4,
  GameSets.ANT_MAN
);

cardSetTest(
  new Schemes(Object.values(Schemes.FANTASTIC_FOUR)),
  4,
  GameSets.FANTASTIC_FOUR
);

describe('Specific scheme checks', () => {
  const setup: GameSetup = new GameSetup(
    GameSets.LEGENDARY,
    GameSets.GUARDIANS_OF_THE_GALAXY
  );
  const gameSetup = setup.generateGame(
    2,
    Schemes.GUARDIANS_OF_THE_GALAXY.THE_KREE_SKRULL_WAR
  );
  it('should have Kree and Skrull villains', () => {
    expect(gameSetup.villainDeck.villains).toContain(
      VillainGroups.GUARDIANS_OF_THE_GALAXY.KREE_STARFORCE
    );
    expect(gameSetup.villainDeck.villains).toContain(VillainGroups.LEGENDARY.SKRULLS);
  });
});

describe('Total Schemes sets', () => {
  const total: number = [
    ...Object.values(Schemes.LEGENDARY),
    ...Object.values(Schemes.DARK_CITY),
    ...Object.values(Schemes.HEROES_OF_ASGARD),
    ...Object.values(Schemes.GUARDIANS_OF_THE_GALAXY),
    ...Object.values(Schemes.ANT_MAN),
    ...Object.values(Schemes.FANTASTIC_FOUR)
  ].length;
  it(`should have ${total} entries`, () =>
    expect(Schemes.ALL).toHaveLength(total));
});
