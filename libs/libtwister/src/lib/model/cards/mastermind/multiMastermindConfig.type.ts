import { IMastermind } from './mastermind';

export type MultiMastermindConfig = Omit<
  IMastermind,
  | 'id'
  | 'gameSet'
  | 'alwaysLeads'
  | 'keywords'
  | 'ruleOverride'
  | 'victoryPoints'
>;
