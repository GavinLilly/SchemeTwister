import { GameSetSize } from '../constants/game-set-size.const';
import { SeriesMeta } from '../series-meta';

import { INamedObject } from './named-object.interface';

export interface IGameSetMeta extends INamedObject {
  readonly id: string;
  readonly name: string;
  readonly size: GameSetSize;
  readonly releaseYear: number;
  readonly series: SeriesMeta;
}
