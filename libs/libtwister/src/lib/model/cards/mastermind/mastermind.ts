import { GameSet } from '../../GameSet';
import { INumPlayerRules, IFightable, ISpecialRules } from '../../interfaces';
import { CARD_TYPE } from '../../types/cardType.type';
import { AbstractFightableCardGroup } from '../abstractFightableCardGroup';
import { Henchmen } from '../henchmen';
import { Hero } from '../hero';
import { VillainGroup } from '../villainGroup';

/**
 * A function that will override the rules provided,
 * optionally basing it on the number of players.
 */
type RuleOverrideFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export interface IMastermind extends IFightable, ISpecialRules {
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

export class Mastermind
  extends AbstractFightableCardGroup
  implements IMastermind
{
  private readonly _alwaysLeads: (VillainGroup | Henchmen)[];
  private readonly _overrideFunction?: RuleOverrideFunction;
  private readonly _masterStrike: string;
  private readonly _specialRules?: string;
  private readonly _startOfGame?: string;
  private readonly _escape?: string;
  private readonly _finishThePrey?: string;
  private readonly _mastermindWins?: string;
  private readonly _alwaysInclude: Hero[];
  private readonly _dark?: string;

  constructor(mastermindConfig: IMastermind) {
    super(mastermindConfig);

    ({
      alwaysLeads: this._alwaysLeads,
      ruleOverride: this._overrideFunction,
      masterStrike: this._masterStrike,
      escape: this._escape,
      finishThePrey: this._finishThePrey,
      specialRules: this._specialRules,
      startOfGame: this._startOfGame,
      mastermindWins: this._mastermindWins,
      dark: this._dark,
    } = mastermindConfig);

    this._alwaysInclude = mastermindConfig.alwaysInclude ?? [];
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

  get masterStrike() {
    return this._masterStrike;
  }

  get specialRules() {
    return this._specialRules;
  }

  get cardType() {
    return CARD_TYPE.mastermind;
  }

  get startOfGame() {
    return this._startOfGame;
  }

  get escape() {
    return this._escape;
  }

  get finishThePrey() {
    return this._finishThePrey;
  }

  get mastermindWins() {
    return this._mastermindWins;
  }

  get alwaysInclude() {
    return this._alwaysInclude;
  }

  get dark() {
    return this._dark;
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
      masterStrike: '',
      alwaysInclude: [],
    });
  }
}
