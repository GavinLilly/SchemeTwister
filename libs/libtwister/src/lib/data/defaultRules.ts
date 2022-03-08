import { Rules } from '../model';

export default function defaultRules(): Rules {
  return {
    1: {
      heroDeck: {
        numHeroes: 3,
      },
      villainDeck: {
        numVillainGroups: 1,
        numHenchmenGroups: 1,
        numBystanders: 1,
        numTwists: 8,
        numMasterStrikes: 1,
      },
    },
    2: {
      heroDeck: {
        numHeroes: 5,
      },
      villainDeck: {
        numVillainGroups: 2,
        numHenchmenGroups: 1,
        numBystanders: 2,
        numTwists: 8,
        numMasterStrikes: 5,
      },
    },
    3: {
      heroDeck: {
        numHeroes: 5,
      },
      villainDeck: {
        numVillainGroups: 3,
        numHenchmenGroups: 1,
        numBystanders: 8,
        numTwists: 8,
        numMasterStrikes: 5,
      },
    },
    4: {
      heroDeck: {
        numHeroes: 5,
      },
      villainDeck: {
        numVillainGroups: 3,
        numHenchmenGroups: 2,
        numBystanders: 8,
        numTwists: 8,
        numMasterStrikes: 5,
      },
    },
    5: {
      heroDeck: {
        numHeroes: 6,
      },
      villainDeck: {
        numVillainGroups: 4,
        numHenchmenGroups: 2,
        numBystanders: 12,
        numTwists: 8,
        numMasterStrikes: 5,
      },
    },
  };
}
