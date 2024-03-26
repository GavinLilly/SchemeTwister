import { GameSet } from '../GameSet';
import { SeriesMeta } from '../seriesMeta';

export interface ISeries {
  seriesMeta: SeriesMeta;
  gameSets: GameSet[];
}
