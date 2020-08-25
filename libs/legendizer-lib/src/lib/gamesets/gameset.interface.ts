export enum GameSetSize {
  SMALL = "Small",
  MEDIUM = "Medium",
  LARGE = "Large"
}

export interface IGameSet {
  id: string;
  name: string;
  size: GameSetSize
}
