import { IGameSetMeta } from './game-set.interface';
import { IKeyword } from './keyword.interface';
import { INamedObject } from './named-object.interface';

export interface IPlayableObject extends INamedObject {
  /**
   * Meta: The associated game set
   */
  readonly gameSet: IGameSetMeta;

  /**
   * Keywords associated to the card
   */
  readonly keywords?: IKeyword[];
}
