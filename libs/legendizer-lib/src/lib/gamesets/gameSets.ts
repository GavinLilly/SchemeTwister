import { GameSetSize, IGameSet } from './gameset.interface';

export class GameSets {
  public static readonly LEGENDARY: IGameSet = {
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)',
    size: GameSetSize.CORE,
    releaseYear: 2012,
  };

  public static readonly DARK_CITY: IGameSet = {
    id: '98e9c054-e151-4126-9b75-55794e67e35a',
    name: 'Dark City',
    size: GameSetSize.LARGE,
    releaseYear: 2013,
  };

  public static readonly HEROES_OF_ASGARD: IGameSet = {
    id: '9adad8eb-55b4-4fbe-b6db-f6a0c35cf809',
    name: 'Heroes of Asgard',
    size: GameSetSize.SMALL,
    releaseYear: 2020,
  };

  public static readonly GUARDIANS_OF_THE_GALAXY: IGameSet = {
    id: 'd1226e8b-41a9-45e8-b248-a8002b135914',
    name: 'Guardians of the Galaxy',
    size: GameSetSize.SMALL,
    releaseYear: 2014,
  };

  public static readonly ANT_MAN: IGameSet = {
    id: 'dfc6f919-c107-4ff0-9855-c84377fb90ca',
    name: 'Ant-Man',
    size: GameSetSize.SMALL,
    releaseYear: 2018,
  };

  public static readonly FANTASTIC_FOUR: IGameSet = {
    id: '8fb1c42f-41e2-4c25-ad63-b7cbdbf47972',
    name: 'Fantastic Four',
    size: GameSetSize.SMALL,
    releaseYear: 2013,
  };

  public static readonly PAINT_THE_TOWN_RED: IGameSet = {
    id: 'a4849376-1467-4e32-ad74-f63ff17f6979',
    name: 'Paint the Town Red',
    size: GameSetSize.SMALL,
    releaseYear: 2014,
  };

  public static readonly X_MEN: IGameSet = {
    id: 'f1a6e975-0785-491f-9ab3-712bc05f9a34',
    name: 'X-Men',
    size: GameSetSize.LARGE,
    releaseYear: 2017,
  };

  public static readonly SHIELD: IGameSet = {
    id: 'b5672b69-d1a8-4d74-a0ad-f8488c32b488',
    name: 'S.H.I.E.L.D.',
    size: GameSetSize.SMALL,
    releaseYear: 2019,
  };

  public static readonly WORLD_WAR_HULK: IGameSet = {
    id: '485cf58f-e75d-4cb3-9bb3-d80e04448745',
    name: 'World War Hulk',
    size: GameSetSize.LARGE,
    releaseYear: 2018,
  };

  public static readonly ALL = [
    GameSets.LEGENDARY,
    GameSets.DARK_CITY,
    GameSets.HEROES_OF_ASGARD,
    GameSets.GUARDIANS_OF_THE_GALAXY,
    GameSets.ANT_MAN,
    GameSets.FANTASTIC_FOUR,
    GameSets.PAINT_THE_TOWN_RED,
    GameSets.X_MEN,
    GameSets.SHIELD,
    GameSets.WORLD_WAR_HULK,
  ].sort((a, b) => {
    if (a.size > b.size) return -1;
    if (a.size < b.size) return 1;
    if (a.size === b.size) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    }
    return 0;
  });
}
