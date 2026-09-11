import { SetOptional } from 'type-fest';
import { CARD_TYPE } from '../constants/card-type.const';
import { Fightable } from '../interfaces/fightable.interface';

import { FightableCardGroup } from './fightable-card-group';

export interface HenchmenConfig
  extends SetOptional<Fightable, 'victoryPoints'> {
  fight?: string;
  ambush?: string;
  ability?: string;
}

export class Henchmen extends FightableCardGroup implements Fightable {
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
