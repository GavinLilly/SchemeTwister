import { GameSet } from '../game-set';
import { Keyword } from './keyword.interface';
import { NamedObject } from './named-object.interface';

export interface PlayableObject extends NamedObject {
  /**
   * Meta: The associated game set
   */
  readonly gameSet: GameSet;

  /**
   * Keywords associated to the card
   */
  readonly keywords?: Keyword[];
}
