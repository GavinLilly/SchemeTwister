import { BaseDeckRequirements } from './base-deck-requirements';

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
