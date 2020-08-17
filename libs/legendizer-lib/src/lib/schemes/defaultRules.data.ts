import { IRules } from "./rules.interface";

export const defaultRules: IRules = {
  heroDeck: {
    numHeroes: {
      2: 5,
      3: 5,
      4: 5,
      5: 6,
    }
  },
  villainDeck: {
    numVillainGroups: {
      2: 2,
      3: 3,
      4: 3,
      5: 4,
    },
    numHenchmenGroups: {
      2: 1,
      3: 1,
      4: 2,
      5: 2,
    },
    numBystanders: {
      2: 2,
      3: 8,
      4: 8,
      5: 12,
    },
    numTwists: {
      2: 8,
      3: 8,
      4: 8,
      5: 8,
    }
  }
};
