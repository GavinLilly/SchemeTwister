import { AdditionalDeckRequirements } from './additional-deck-requirements';

export interface AdditionalDeckRules {
  name: string;
  instruction?: string;
  deck?: AdditionalDeckRequirements;
}
