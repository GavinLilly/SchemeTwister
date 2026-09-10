import { IFightable } from '../../interfaces/fightable.interface';
import { ISpecialRules } from '../../interfaces/special-rules.interface';
import { Henchmen } from '../henchmen';
import { Hero } from '../hero';
import { VillainGroup } from '../villain-group';
import { RuleOverrideFunction } from './mastermind';

export interface MastermindConfig extends IFightable, ISpecialRules {
  readonly alwaysLeads: (VillainGroup | Henchmen)[];
  /**
   * Override the rules for each number of players.
   * Useful for setting a rule based on the number of players
   */
  readonly ruleOverride?: RuleOverrideFunction;
  readonly masterStrike: string;
  readonly startOfGame?: string;
  readonly mastermindWins?: string;
  readonly alwaysInclude?: Hero[];
  readonly dark?: string;
}
