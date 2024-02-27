import { GameSet } from '../GameSet';

export interface ISeries {
  id: string;
  seriesName: string;
  description: string;
  gameSets: GameSet[];
}
