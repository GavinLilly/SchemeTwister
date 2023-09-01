import { IKeyword, IScheme, IGameSetMeta, ISchemeMeta } from '../interfaces';
import { CARD_TYPE } from '../types';

export class SchemeDefinition implements IScheme {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _gameSet: IGameSetMeta;
  private readonly _setup: string;
  private readonly _twist: string;
  private readonly _evilWins: string;
  private readonly _specialRules?: string | undefined;
  private readonly _meta: ISchemeMeta;
  private readonly _keywords: IKeyword[];

  constructor(config: Omit<IScheme, 'cardType'>) {
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
