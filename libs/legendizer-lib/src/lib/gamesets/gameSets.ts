import { GameSetSize, IGameSet } from "./gameset.interface";

export class GameSets {
  public static readonly LEGENDARY: IGameSet = {
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)',
    size: GameSetSize.LARGE
  };

  public static readonly DARK_CITY: IGameSet = {
    id: '98e9c054-e151-4126-9b75-55794e67e35a',
    name: 'Dark City',
    size: GameSetSize.LARGE
  };

  public static readonly HEROES_OF_ASGARD: IGameSet = {
    id: '9adad8eb-55b4-4fbe-b6db-f6a0c35cf809',
    name: 'Heroes of Asgard',
    size: GameSetSize.SMALL
  };

  public static readonly GUARDIANS_OF_THE_GALAXY: IGameSet = {
    id: 'd1226e8b-41a9-45e8-b248-a8002b135914',
    name: 'Guardians of the Galaxy',
    size: GameSetSize.SMALL
  }

  public static readonly ANT_MAN: IGameSet = {
    id: 'dfc6f919-c107-4ff0-9855-c84377fb90ca',
    name: 'Ant-Man',
    size: GameSetSize.SMALL
  }

  public static readonly ALL = [
    GameSets.LEGENDARY,
    GameSets.DARK_CITY,
    GameSets.HEROES_OF_ASGARD,
    GameSets.GUARDIANS_OF_THE_GALAXY,
    GameSets.ANT_MAN
  ];
}
