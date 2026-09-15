import { AdditionalDeckRules } from './additional-deck-rules';
import { HeroDeckRequirements } from './hero-deck-requirements';
import { VillainDeckRequirements } from './villain-deck-requirements';

export interface NumPlayerRules {
  heroDeck: HeroDeckRequirements;
  villainDeck: VillainDeckRequirements;
  additionalDeck: AdditionalDeckRules[];
  numWounds?: number;
  numShieldOfficers?: number;
  numShards?: number;
}
