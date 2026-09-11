import { GameSet } from '../game-set';
import { SeriesMeta } from '../series-meta';

export interface Series {
  seriesMeta: SeriesMeta;
  gameSets: GameSet[];
}
