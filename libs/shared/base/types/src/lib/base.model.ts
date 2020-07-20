import { IBase } from './base.interface';
import { GameSet } from '@legendizer/shared/gameSet/data';
import { CardType } from './cardType.enum';

export abstract class BaseModel<T extends IBase> implements IBase {
  id: string;
  name: string;
  gameSet: GameSet;
  cardType: CardType;

  protected constructor(t: T) {
    this.id = t.id;
    this.name = t.name;
    this.gameSet = t.gameSet;
    this.cardType = t.cardType
  }
}
