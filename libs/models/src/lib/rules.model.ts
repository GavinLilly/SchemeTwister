type numPlayers = 2 | 3 | 4 | 5;

export class RulesModel {
  numVillains: Record<numPlayers, number> = {
    2: 2,
    3: 3,
    4: 3,
    5: 4
  };

  numHenchmen: Record<numPlayers, number> = {
    2: 1,
    3: 1,
    4: 2,
    5: 2
  };

  numBystanders: Record<numPlayers, number> = {
    2: 2,
    3: 8,
    4: 8,
    5: 12
  };

  numHeroes: Record<numPlayers, number> = {
    2: 5,
    3: 5,
    4: 5,
    5: 6
  };

  numTwists: Record<numPlayers, number> = {
    2: 8,
    3: 8,
    4: 8,
    5: 8
  };
}
