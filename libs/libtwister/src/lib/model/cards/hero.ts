import * as uuid from 'uuid';

import { GameSet } from '../GameSet';
import { ICardType, IPlayableObject, ITeam } from '../interfaces';
import { CardType } from '../types';

import { AbstractCardGroup } from './abstractCardGroup';

interface IHero extends IPlayableObject {
  team?: ITeam;
}
export class Hero extends AbstractCardGroup implements IHero {
  private readonly _team?: ITeam;
  private readonly _cardType: CardType;

  constructor(heroConfig: IHero & Partial<ICardType>) {
    super(heroConfig);

    ({ team: this._team } = heroConfig);

    this._cardType = heroConfig.cardType ?? 'Hero';
  }

  get team() {
    return this._team;
  }

  override get cardType() {
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
