import { v4 as uuidV4 } from 'uuid';

import { CARD_TYPE, CardType } from '../constants/card-type.const';
import { GameSet } from '../game-set';
import { ICardType } from '../interfaces/card-type.interface';
import { PlayableObject } from '../interfaces/playable-object.interface';
import { Team } from '../interfaces/team.interface';

import { CardGroup } from './card-group';

export interface HeroConfig extends PlayableObject, Partial<ICardType> {
  team?: Team;
}

export class Hero extends CardGroup implements PlayableObject {
  public readonly team?: Team;
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
