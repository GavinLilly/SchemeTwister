import { BaseDeckRequirements } from './base-deck-requirements';

export interface AdditionalDeckRequirements extends BaseDeckRequirements {
  numMasterminds?: number;
  numTwists?: number;
  numVillainGroups?: number;
  numWounds?: number;
}
