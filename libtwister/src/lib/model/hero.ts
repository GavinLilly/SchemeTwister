import * as uuid from 'uuid';

import { GameSet } from './GameSet';
import { CardType } from './cardType.enum';
import { ICard, IGameSetMeta, IKeyword, ITeam } from './interfaces';
import { ICardType } from './interfaces/cardType.interface';

interface IHero extends ICard, Partial<ICardType> {
  team?: ITeam;
}

export class Hero implements IHero {
  private readonly _id: string;
  private readonly _name: string;
  private readonly _gameSet: IGameSetMeta;
  private readonly _team?: ITeam | undefined;
  private readonly _keywords: IKeyword[];
  private readonly _cardType: CardType;

  constructor(heroConfig: IHero) {
    ({
      name: this._name,
      gameSet: this._gameSet,
      id: this._id,
      team: this._team,
    } = heroConfig);

    this._cardType = heroConfig.cardType ?? CardType.HERO;
    this._keywords = heroConfig.keywords ?? [];
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._name;
  }

  get gameSet() {
    return this._gameSet;
  }

  get team() {
    return this._team;
  }

  get keywords() {
    return this._keywords;
  }

  get cardType() {
    return this._cardType;
  }

  public static empty(): Hero {
    return new Hero({
      id: uuid.v4(),
      name: 'EMPTY HERO',
      gameSet: GameSet.empty(),
    });
  }
}
