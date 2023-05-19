import { IGameSetMeta } from './gameSet.interface';
import { IKeyword } from './keyword.interface';
import { INamedObject } from './namedObject.interface';

export interface ICard extends INamedObject {
  /**
   * Meta: The associated game set
   */
  readonly gameSet: IGameSetMeta;

  /**
   * Keywords associated to the card
   */
  readonly keywords?: IKeyword[];
}
