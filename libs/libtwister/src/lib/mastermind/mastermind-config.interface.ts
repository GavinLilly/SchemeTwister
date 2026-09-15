import { Henchmen } from '../henchmen/henchmen.model';
import { Hero } from '../hero/hero.model';
import { Fightable } from '../shared/fightable.interface';
import { SpecialRules } from '../shared/special-rules.interface';
import { VillainGroup } from '../villain-group/villain-group.model';

import { RuleOverrideFunction } from './mastermind.model';

export interface MastermindConfig extends Fightable, SpecialRules {
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
