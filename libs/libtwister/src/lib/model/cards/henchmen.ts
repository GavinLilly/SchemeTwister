import { IFightable } from '../interfaces';
import { CARD_TYPE } from '../types';

import { AbstractFightableCardGroup } from './abstractFightableCardGroup';

interface IHenchmen extends IFightable {
  fight: string;
  ambush?: string;
  ability?: string;
}

export class Henchmen extends AbstractFightableCardGroup implements IHenchmen {
  private readonly _fight: string;
  private readonly _ambush?: string;
  private readonly _ability?: string;

  constructor(config: IHenchmen) {
    super(config);

    ({
      fight: this._fight,
      ambush: this._ambush,
      ability: this._ability,
    } = config);
  }

  get cardType() {
    return CARD_TYPE.henchmen;
  }

  get fight() {
    return this._fight;
  }

  get ambush() {
    return this._ambush;
  }

  get ability() {
    return this._ability;
  }
}
