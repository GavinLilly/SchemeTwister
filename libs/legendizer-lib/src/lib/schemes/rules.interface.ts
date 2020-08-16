export type numPlayers = 2 | 3 | 4 | 5;

interface IHeroDeck {
  numHeroes: Record<numPlayers, number>;
  numBystanders?: Record<numPlayers, number>;
}

interface IVillainDeck {
  numVillainGroups: Record<numPlayers, number>;
  numHenchmenGroups: Record<numPlayers, number>;
  numBystanders: Record<numPlayers, number>;
  numTwists: Record<numPlayers, number>;
  numHeroes?: Record<numPlayers, number>;
}

export interface IRules {
  heroDeck: IHeroDeck,
  villainDeck: IVillainDeck
  numWounds?: Record<numPlayers, number>;
}
