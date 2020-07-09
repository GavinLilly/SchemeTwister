import { Base } from "@legendizer/shared/base/types";
import { VillainGroup } from "@legendizer/shared/villainGroup/types";

type numPlayers = 2 | 3 | 4 | 5;

export interface Rules {
  numVillains: Record<numPlayers, number>;
  numHenchmen: Record<numPlayers, number>;
  numBystanders: Record<numPlayers, number>;
  numHeroes: Record<numPlayers, number>;
  numTwists: Record<numPlayers, number>;
  numWounds?: Record<numPlayers, number>;
  numMasterStrikes: Record<numPlayers, number>;
}

export interface Scheme extends Base {
  twist: string;
  evilWins: string;
  setup: string;
  specialRules?: string;
  numWounds?: number;
  numBystandersInVillainDeck?: number;
  requiredVillains?: VillainGroup;
  rules: Rules;
}
