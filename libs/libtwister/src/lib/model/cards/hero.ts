import { v4 as uuidV4 } from 'uuid';

import { GameSet } from '../GameSet';
import { ICardType } from '../interfaces/cardType.interface';
import { IPlayableObject } from '../interfaces/playableObject.interface';
import { ITeam } from '../interfaces/team.interface';
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
      id: uuidV4(),
      name: 'EMPTY HERO',
      gameSet: GameSet.empty(),
    });
  }
}
