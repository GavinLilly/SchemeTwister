import { CardType } from '../cardType.enum';
import { GameSetSize } from '../gameSetSize.enum';
import { INumPlayerRules, IFightable } from '../interfaces';
import { Series } from '../series.enum';

import { AbstractFightableCardGroup } from './fightableCardGroup';
import { Henchmen } from './henchmen';
import { VillainGroup } from './villainGroup';

/** A function that will override the rules provided, optionally basing it on the number of players. */
type RuleOverrideFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export interface IMastermind extends IFightable {
  readonly alwaysLeads: (VillainGroup | Henchmen)[];
  /**
   * Override the rules for each number of players. Useful for setting a rule
   * based on the number of players
   * */
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
    return CardType.MASTERMIND;
  }

  public static empty(): Mastermind {
    return new Mastermind({
      gameSet: {
        id: '4ac65530-33b5-454d-b5c2-74ab0d08b898',
        name: 'EMPTY_GAME_SET',
        releaseYear: 1970,
        series: Series.MAINLINE,
        size: GameSetSize.PROMO,
      },
      name: 'EMPTY_MASTERMIND',
      id: 'c3af35df-7b37-49c4-9c56-640591c94bd9',
      attackPoints: 0,
      victoryPoints: 0,
      alwaysLeads: [],
    });
  }
}

export class EpicMastermindBuilder {
  constructor(
    private _config: Pick<
      IMastermind,
      'name' | 'gameSet' | 'alwaysLeads' | 'keywords' | 'victoryPoints'
    >
  ) {}

  buildNormal(
    config: Pick<IMastermind, 'id' | 'attackPoints' | 'ruleOverride'>
  ) {
    return this._buildMastermind({
      ...this._config,
      ...config,
    });
  }

  buildEpic(config: Pick<IMastermind, 'id' | 'attackPoints' | 'ruleOverride'>) {
    return this._buildMastermind({
      ...this._config,
      ...config,
      name: `Epic ${this._config.name}`,
    });
  }

  private _buildMastermind(config: IMastermind) {
    return new Mastermind(config);
  }
}
