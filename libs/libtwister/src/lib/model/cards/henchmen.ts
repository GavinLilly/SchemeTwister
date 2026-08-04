import { IFightable } from '../interfaces/fightable.interface';
import { IVictoryPileCard } from '../interfaces/victoryPileCard.interface';
import { CARD_TYPE } from '../types/cardType.type';

import { AbstractFightableCardGroup } from './abstractFightableCardGroup';

interface IHenchmen extends IFightable {
  fight?: string;
  ambush?: string;
  ability?: string;
}

export type HenchmenConfig = Omit<IHenchmen, 'victoryPoints'> &
  Partial<IVictoryPileCard>;

export class Henchmen extends AbstractFightableCardGroup implements IHenchmen {
  public readonly fight?: string;
  public readonly ambush?: string;
  public readonly ability?: string;

  constructor(config: HenchmenConfig) {
    super({
      ...config,
      victoryPoints: config.victoryPoints ?? 1,
    });

    this.fight = config.fight;
    this.ambush = config.ambush;
    this.ability = config.ability;
  }

  get cardType() {
    return CARD_TYPE.henchmen;
  }
}
