import * as uuid from 'uuid';

import { GameSet } from './GameSet';
import { AbstractCardGroup } from './cardGroup';
import { CardType } from './cardType.enum';
import { ICard, ITeam } from './interfaces';
import { ICardType } from './interfaces/cardType.interface';

interface IHero extends ICard, Partial<ICardType> {
  team?: ITeam;
}

export class Hero extends AbstractCardGroup implements IHero {
  private readonly _team?: ITeam;
  private readonly _cardType: CardType;

  constructor(heroConfig: IHero) {
    super(heroConfig);

    ({ team: this._team } = heroConfig);

    this._cardType = heroConfig.cardType ?? CardType.HERO;
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
