interface BaseDeckRequirements {
  numHeroes?: number;
  numHenchmenGroups?: number;
  numBystanders?: number;
}

export interface VillainDeckRequirements extends BaseDeckRequirements {
  numTwists: number;
  numSidekicks?: number;
  numShieldOfficers?: number;
  numVillainGroups: number;
  numHenchmenGroups: number;
  numMasterminds?: number;
  numAmbitions?: number;
  numMasterStrikes: number;
}

export interface HeroDeckRequirements extends BaseDeckRequirements {
  numHeroes: number;
}

export interface AdditionalDeckRequirements extends BaseDeckRequirements {
  numMasterminds?: number;
  numTwists?: number;
  numVillainGroups?: number;
  numWounds?: number;
}

export interface AdditionalDeckRules {
  name: string;
  instruction?: string;
  deck?: AdditionalDeckRequirements;
}

export interface NumPlayerRules {
  heroDeck: HeroDeckRequirements;
  villainDeck: VillainDeckRequirements;
  additionalDeck: AdditionalDeckRules[];
  numWounds?: number;
  numShieldOfficers?: number;
  numShards?: number;
}
