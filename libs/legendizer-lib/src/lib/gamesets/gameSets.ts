import { IGameSet } from "./gameset.interface";

export class GameSets {
  public static readonly LEGENDARY: IGameSet = {
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)'
  }

  public static readonly DARK_CITY: IGameSet = {
    id: '98e9c054-e151-4126-9b75-55794e67e35a',
    name: 'Dark City'
  }

  public static readonly ALL = [
    GameSets.LEGENDARY,
    GameSets.DARK_CITY
  ]
}
