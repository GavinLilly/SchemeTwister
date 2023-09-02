import { GameSet } from '../GameSet';
import { INumPlayerRules, IFightable } from '../interfaces';
import { CARD_TYPE } from '../types';

import { AbstractFightableCardGroup } from './abstractFightableCardGroup';
import { Henchmen } from './henchmen';
import { VillainGroup } from './villainGroup';

/**
 * A function that will override the rules provided,
 * optionally basing it on the number of players.
 */
type RuleOverrideFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export interface IMastermind extends IFightable {
  readonly alwaysLeads: (VillainGroup | Henchmen)[];
  /**
   * Override the rules for each number of players.
   * Useful for setting a rule based on the number of players
   */
  readonly ruleOverride?: RuleOverrideFunction;
}

export class Mastermind
  extends AbstractFightableCardGroup
  implements IMastermind
{
  private readonly _alwaysLeads: (VillainGroup | Henchmen)[];
  private readonly _overrideFunction?: RuleOverrideFunction;

  constructor(mastermindConfig: IMastermind) {
    super(mastermindConfig);

    ({ alwaysLeads: this._alwaysLeads, ruleOverride: this._overrideFunction } =
      mastermindConfig);
  }

  get alwaysLeads() {
    return this._alwaysLeads;
  }

  get isEpic() {
    return this.name.startsWith('Epic');
  }

  get ruleOverride() {
    return this._overrideFunction;
  }

  get cardType() {
    return CARD_TYPE.mastermind;
  }

  /**
   * Creates an empty Mastermind that is part of an empty Game Set with a random
   * UUID
   * @returns A Mastermind instance
   */
  public static empty(): Mastermind {
    return new Mastermind({
      gameSet: GameSet.empty(),
      name: 'EMPTY_MASTERMIND',
      id: 'c3af35df-7b37-49c4-9c56-640591c94bd9',
      attackPoints: 0,
      victoryPoints: 0,
      alwaysLeads: [],
    });
  }
}

type CommonMastermindAttributes = Pick<
  IMastermind,
  'name' | 'gameSet' | 'alwaysLeads' | 'keywords' | 'victoryPoints'
>;

type SpecificMastermindAttributes = Pick<
  IMastermind,
  'id' | 'attackPoints' | 'ruleOverride'
>;

/**
 * A builder class for creating a normal + epic Mastermind combo
 */
export class EpicMastermindBuilder {
  constructor(private _config: CommonMastermindAttributes) {}

  public buildNormal = (config: SpecificMastermindAttributes): Mastermind =>
    this._buildMastermind({
      ...this._config,
      ...config,
    });

  public buildEpic = (config: SpecificMastermindAttributes): Mastermind =>
    this._buildMastermind({
      ...this._config,
      ...config,
      name: `Epic ${this._config.name}`,
    });

  private _buildMastermind(config: IMastermind) {
    return new Mastermind(config);
  }
}
