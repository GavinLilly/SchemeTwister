import { CardType } from '../cardType.enum';

import { IKeyword } from './keyword.interface';
import { INamedObject } from './namedObject.interface';

export interface ICard extends INamedObject {
  /**
   * Meta: Type of the card
   */
  readonly cardType: CardType;

  /**
   * Meta: ID of the associated game set
   */
  readonly gameSetId: string;

  /**
   * Meta: Keywords associated to the card
   */
  readonly keywords?: IKeyword[];
}
