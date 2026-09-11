import { Constructor } from 'type-fest';
import { CARD_TYPE } from '../constants/card-type.const';
import { GameSet } from '../game-set';
import { ICardType } from '../interfaces/card-type.interface';
import { Keyword } from '../interfaces/keyword.interface';
import { SpecialRules } from '../interfaces/special-rules.interface';
import { RulesModifierFunction } from '../rules';
import { Scheme } from '../schemes/scheme';

/* eslint-disable @typescript-eslint/naming-convention */
interface EachPlayerNumber {
  1: number;
  2: number;
  3: number;
  4: number;
  5: number;
}
/* eslint-enable @typescript-eslint/naming-convention */

interface OverrideScheme {
  schemeType: Constructor<Scheme>;
  params?: unknown[];
}

interface SchemeMeta {
  numTwists: number | EachPlayerNumber;
  rules?: RulesModifierFunction;
  overrideScheme?: OverrideScheme;
  numCourageTokens?: number | EachPlayerNumber;
}

export interface SchemeDefinitionConfig
  extends SpecialRules,
    Partial<ICardType> {
  setup: string;
  twist: string;
  evilWins: string;
  meta: SchemeMeta;
}

export class SchemeDefinition implements SpecialRules, ICardType {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _gameSet: GameSet;
  private readonly _setup: string;
  private readonly _twist: string;
  private readonly _evilWins: string;
  private readonly _specialRules?: string;
  private readonly _meta: SchemeMeta;
  private readonly _keywords: Keyword[];

  constructor(config: SchemeDefinitionConfig) {
    ({
      id: this._id,
      name: this._name,
      gameSet: this._gameSet,
      setup: this._setup,
      twist: this._twist,
      evilWins: this._evilWins,
      specialRules: this._specialRules,
      meta: this._meta,
    } = config);

    this._keywords = config.keywords ?? [];
  }

  public get id() {
    return this._id;
  }

  public get name() {
    return this._name;
  }

  public get gameSet() {
    return this._gameSet;
  }

  public get setup() {
    return this._setup;
  }

  public get twist() {
    return this._twist;
  }

  public get evilWins() {
    return this._evilWins;
  }

  public get specialRules() {
    return this._specialRules;
  }

  public get meta() {
    return this._meta;
  }

  public get keywords() {
    return this._keywords;
  }

  get cardType() {
    return CARD_TYPE.scheme;
  }
}
