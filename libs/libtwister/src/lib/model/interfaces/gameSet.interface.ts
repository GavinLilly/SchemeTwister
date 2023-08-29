import { GameSetSize } from '../gameSetSize.enum';
import { Series } from '../types/series.type';

import { INamedObject } from './namedObject.interface';

export interface IGameSetMeta extends INamedObject {
  readonly id: string;
  readonly name: string;
  readonly size: GameSetSize;
  readonly releaseYear: number;
  readonly series: Series;
}
