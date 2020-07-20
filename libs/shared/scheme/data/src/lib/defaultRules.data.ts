import { IRules } from "@legendizer/shared/scheme/types";

export const defaultRules: IRules = {
  numVillains: {
    2: 2,
    3: 3,
    4: 3,
    5: 4,
  },
  numHenchmen: {
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
  numHeroes: {
    2: 5,
    3: 5,
    4: 5,
    5: 6,
  },
  numTwists: {
    2: 8,
    3: 8,
    4: 8,
    5: 8,
  },
  numMasterStrikes: {
    2: 5,
    3: 5,
    4: 5,
    5: 5
  }
};
