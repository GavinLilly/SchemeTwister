export type numPlayers = 2 | 3 | 4 | 5;

export interface IDeckRequirements {
  numHeroes?: number;
  numVillainGroups?: number;
  numHenchmenGroups?: number;
  numBystanders?: number;
  numWounds?: number;
}

interface IVillainDeckRequirements extends IDeckRequirements {
  numTwists: number;
  numSidekicks?: number;
  numShieldOfficers?: number;
  numVillainGroups: number;
  numHenchmenGroups: number;
  numMasterminds?: number;
  numAmbitions?: number;
}

interface IHeroDeckRequirements extends IDeckRequirements {
  numHeroes: number;
}

interface IAdditionalDeckRequirements extends IDeckRequirements {
  numMasterminds?: number;
  numTwists?: number;
}

export interface INumPlayerRules {
  heroDeck: IHeroDeckRequirements;
  villainDeck: IVillainDeckRequirements;

  additionalDeck?: {
    name: string;
    instruction?: string;
    deck: IAdditionalDeckRequirements;
  };
  numWounds?: number;
  numShieldOfficers?: number;
  numShards?: number;
}

export type IRules = Record<numPlayers, INumPlayerRules>;
