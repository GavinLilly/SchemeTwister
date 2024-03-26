import { GameSet } from '../GameSet';

export interface ISeriesMeta {
  id: string;
  seriesName: string;
  description: string;
}

export interface ISeries extends ISeriesMeta {
  gameSets: GameSet[];
}
