import { CardType } from './cardType.enum';
import { GameSetSize } from './gameSetSize.enum';
import {
  IBadGuyCard,
  IGameSetMeta,
  IHenchmen,
  IKeyword,
  INumPlayerRules,
  IVillainGroup,
} from './interfaces';
import { ICardType } from './interfaces/cardType.interface';
import { Series } from './series.enum';

/** A function that will override the rules provided, optionally basing it on the number of players. */
type RuleOverrideFunction = (
  rule: INumPlayerRules,
  num: number
) => INumPlayerRules;

export interface IMastermind extends IBadGuyCard {
  readonly name: string;
  readonly keywords?: IKeyword[];
  readonly alwaysLeads: (IVillainGroup | IHenchmen)[];
  /**
   * Override the rules for each number of players. Useful for setting a rule
   * based on the number of players
   * */
  readonly ruleOverride?: RuleOverrideFunction;
}

export class Mastermind implements IMastermind, ICardType {
  private readonly _name: string;
  private readonly _gameSet: IGameSetMeta;
  private readonly _keywords: IKeyword[];
  private readonly _alwaysLeads: (IVillainGroup | IHenchmen)[];
  private readonly _id: string;
  private readonly _attackPoints: number | string;
  private readonly _victoryPoints: number;
  private readonly _overrideFunction?: RuleOverrideFunction;

  constructor(mastermindConfig: IMastermind) {
    ({
      name: this._name,
      gameSet: this._gameSet,
      alwaysLeads: this._alwaysLeads,
      id: this._id,
      attackPoints: this._attackPoints,
      victoryPoints: this._victoryPoints,
      ruleOverride: this._overrideFunction,
    } = mastermindConfig);

    this._keywords = mastermindConfig.keywords ?? [];
  }

  get name() {
    return this._name;
  }

  get gameSet() {
    return this._gameSet;
  }

  get keywords() {
    return this._keywords;
  }

  get alwaysLeads() {
    return this._alwaysLeads;
  }

  get id() {
    return this._id;
  }

  get isEpic() {
    return this.name.startsWith('Epic');
  }

  get ruleOverride() {
    return this._overrideFunction;
  }

  get attackPoints() {
    return this._attackPoints;
  }

  get victoryPoints() {
    return this._victoryPoints;
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
