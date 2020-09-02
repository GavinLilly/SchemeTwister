export enum GameSetSize {
  SMALL = 1,
  MEDIUM = 2,
  LARGE = 3,
  CORE = 4
}

export interface IGameSet {
  id: string;
  name: string;
  size: GameSetSize
  releaseYear: number;
}
