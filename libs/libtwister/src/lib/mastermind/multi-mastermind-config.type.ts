import { MastermindConfig } from './mastermind-config.interface';

export type MultiMastermindConfig = Omit<
  MastermindConfig,
  | 'id'
  | 'gameSet'
  | 'alwaysLeads'
  | 'keywords'
  | 'ruleOverride'
  | 'victoryPoints'
>;
