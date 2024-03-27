import { SeriesMeta } from '../seriesMeta';
import { GameSetSize } from '../types/gameSetSize.type';

import { INamedObject } from './namedObject.interface';

export interface IGameSetMeta extends INamedObject {
  readonly id: string;
  readonly name: string;
  readonly size: GameSetSize;
  readonly releaseYear: number;
  readonly series: SeriesMeta;
}
