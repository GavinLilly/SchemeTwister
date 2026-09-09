import { CARD_TYPE } from '../constants/card-type.const';
import { IFightable } from '../interfaces/fightable.interface';
import { IVictoryPileCard } from '../interfaces/victory-pile-card.interface';

import { FightableCardGroup } from './fightable-card-group';

interface IHenchmen extends IFightable {
  fight?: string;
  ambush?: string;
  ability?: string;
}

export type HenchmenConfig = Omit<IHenchmen, 'victoryPoints'> &
  Partial<IVictoryPileCard>;

export class Henchmen extends FightableCardGroup implements IHenchmen {
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
