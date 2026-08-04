import * as uuid from 'uuid';

import { GameSet } from '../GameSet';
import { ICardType, IPlayableObject, ITeam } from '../interfaces';
import { CARD_TYPE, CardType } from '../types/cardType.type';

import { AbstractCardGroup } from './abstractCardGroup';

interface IHero extends IPlayableObject {
  team?: ITeam;
}

export type HeroConfig = IHero & Partial<ICardType>;

export class Hero extends AbstractCardGroup implements IHero {
  public readonly team?: ITeam;
  public override readonly cardType: CardType;

  constructor(heroConfig: HeroConfig) {
    super(heroConfig);

    this.team = heroConfig.team;
    this.cardType = heroConfig.cardType ?? CARD_TYPE.hero;
  }

  /**
   * Creates an empty Hero that is part of an empty Game Set with a random UUID
   * @returns A Hero instance
   */
  public static empty(): Hero {
    return new Hero({
      id: uuid.v4(),
      name: 'EMPTY HERO',
      gameSet: GameSet.empty(),
    });
  }
}
