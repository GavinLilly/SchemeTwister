type numPlayers = 2 | 3 | 4 | 5;

export class Rules {
  numVillains: Record<numPlayers, number>;

  numHenchmen: Record<numPlayers, number>;

  numBystanders: Record<numPlayers, number>;

  numHeroes: Record<numPlayers, number>;

  numTwists: Record<numPlayers, number>;
}
