import { SetOptional } from 'type-fest';

import { CARD_TYPE } from '../constants/card-type.const';
import { FightableCardGroup } from '../shared/fightable-card-group';
import { Fightable } from '../shared/fightable.interface';


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
