import { GameSet } from '../game-set';
import { SeriesMeta } from '../series-meta';

export interface ISeries {
  seriesMeta: SeriesMeta;
  gameSets: GameSet[];
}
