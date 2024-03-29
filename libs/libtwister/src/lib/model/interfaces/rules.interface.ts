export interface IDeckRequirements {
  numHeroes?: number;
  numHenchmenGroups?: number;
  numBystanders?: number;
}

export interface IVillainDeckRequirements extends IDeckRequirements {
  numTwists: number;
  numSidekicks?: number;
  numShieldOfficers?: number;
  numVillainGroups: number;
  numHenchmenGroups: number;
  numMasterminds?: number;
  numAmbitions?: number;
  numMasterStrikes: number;
}

export interface IHeroDeckRequirements extends IDeckRequirements {
  numHeroes: number;
}

export interface IAdditionalDeckRequirements extends IDeckRequirements {
  numMasterminds?: number;
  numTwists?: number;
  numVillainGroups?: number;
  numWounds?: number;
}

export interface IAdditionalDeckRules {
  name: string;
  instruction?: string;
  deck?: IAdditionalDeckRequirements;
}

export interface INumPlayerRules {
  heroDeck: IHeroDeckRequirements;
  villainDeck: IVillainDeckRequirements;

  additionalDeck: IAdditionalDeckRules[];
  numWounds?: number;
  numShieldOfficers?: number;
  numShards?: number;
}
