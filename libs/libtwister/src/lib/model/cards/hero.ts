import * as uuid from 'uuid';

import { GameSet } from '../GameSet';
import { CardType } from '../cardType.enum';
import { ICardType, IPlayableObject, ITeam } from '../interfaces';

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

  public static isHero = (
    card: (IPlayableObject & ICardType) | undefined
  ): card is Hero => card?.cardType === CardType.HERO;
}
