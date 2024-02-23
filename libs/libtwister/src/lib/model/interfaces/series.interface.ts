import { GameSet } from '../GameSet';

export interface ISeries {
  seriesName: string;
  description: string;
  gameSets: GameSet[];
}
