import { CARD_TYPE } from '../../constants/card-type.const';
import { GameSet } from '../../game-set';
import { IFightable } from '../../interfaces/fightable.interface';
import { INumPlayerRules } from '../../interfaces/rules.interface';
import { ISpecialRules } from '../../interfaces/special-rules.interface';
import { FightableCardGroup } from '../fightable-card-group';
import { Henchmen } from '../henchmen';
import { Hero } from '../hero';
import { VillainGroup } from '../villain-group';
import { MastermindConfig } from './mastermind-config.interface';

/**
 * A function that will override the rules provided,
 * optionally basing it on the number of players.
 */
export type RuleOverrideFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export class Mastermind
  extends FightableCardGroup
  implements IFightable, ISpecialRules
{
  public readonly alwaysLeads: (VillainGroup | Henchmen)[];
  public readonly ruleOverride?: RuleOverrideFunction;
  public readonly masterStrike: string;
  public readonly specialRules?: string;
  public readonly startOfGame?: string;
  public readonly escape?: string;
  public readonly finishThePrey?: string;
  public readonly mastermindWins?: string;
  public readonly alwaysInclude: Hero[];
  public readonly dark?: string;

  constructor(mastermindConfig: MastermindConfig) {
    super(mastermindConfig);

    this.alwaysLeads = mastermindConfig.alwaysLeads;
    this.ruleOverride = mastermindConfig.ruleOverride;
    this.masterStrike = mastermindConfig.masterStrike;
    this.escape = mastermindConfig.escape;
    this.finishThePrey = mastermindConfig.finishThePrey;
    this.specialRules = mastermindConfig.specialRules;
    this.startOfGame = mastermindConfig.startOfGame;
    this.mastermindWins = mastermindConfig.mastermindWins;
    this.dark = mastermindConfig.dark;
    this.alwaysInclude = mastermindConfig.alwaysInclude ?? [];
  }

  get cardType() {
    return CARD_TYPE.mastermind;
  }

  get isEpic() {
    return this.name.startsWith('Epic');
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
