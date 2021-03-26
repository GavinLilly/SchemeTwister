import { GameSetSize, IGameSet, Series } from './gameset.interface';

export class GameSets {
  public static readonly ANT_MAN: IGameSet = {
    id: 'dfc6f919-c107-4ff0-9855-c84377fb90ca',
    name: 'Ant-Man',
    size: GameSetSize.SMALL,
    releaseYear: 2018,
    series: Series.MAINLINE,
  };

  public static readonly CAPTAIN_AMERICA: IGameSet = {
    id: 'f04d4801-0695-4454-a1b8-ec3e83c4afc1',
    name: 'Captain America 75th Anniversary',
    size: GameSetSize.SMALL,
    releaseYear: 2016,
    series: Series.MAINLINE,
  };

  public static readonly CHAMPIONS: IGameSet = {
    id: '2421bba5-b365-498d-86ae-402f2665a934',
    name: 'Champions',
    size: GameSetSize.SMALL,
    releaseYear: 2018,
    series: Series.MAINLINE,
  };

  public static readonly CIVIL_WAR: IGameSet = {
    id: '15d29845-c669-4dcb-b699-f7a9544ecf50',
    name: 'Civil War',
    size: GameSetSize.LARGE,
    releaseYear: 2016,
    series: Series.MAINLINE,
  };

  public static readonly DARK_CITY: IGameSet = {
    id: '98e9c054-e151-4126-9b75-55794e67e35a',
    name: 'Dark City',
    size: GameSetSize.LARGE,
    releaseYear: 2013,
    series: Series.MAINLINE,
  };

  public static readonly DEADPOOL: IGameSet = {
    id: '0550f566-2341-4ee8-b10d-d276e65a9fa4',
    name: 'Deadpool',
    size: GameSetSize.SMALL,
    releaseYear: 2016,
    series: Series.MAINLINE,
  };

  public static readonly DIMENSIONS: IGameSet = {
    id: '2d2c2861-9e42-4aa4-baf1-4a506881cbdc',
    name: 'Dimensions',
    size: GameSetSize.SMALL,
    releaseYear: 2019,
    series: Series.MAINLINE,
  };

  public static readonly FANTASTIC_FOUR: IGameSet = {
    id: '8fb1c42f-41e2-4c25-ad63-b7cbdbf47972',
    name: 'Fantastic Four',
    size: GameSetSize.SMALL,
    releaseYear: 2013,
    series: Series.MAINLINE,
  };

  public static readonly FEAR_ITSELF: IGameSet = {
    id: '791118b6-a041-47fa-a7a5-cc49bec44e46',
    name: 'Fear Itself',
    size: GameSetSize.SMALL,
    releaseYear: 2015,
    series: Series.VILLAINS,
  };

  public static readonly GUARDIANS_OF_THE_GALAXY: IGameSet = {
    id: 'd1226e8b-41a9-45e8-b248-a8002b135914',
    name: 'Guardians of the Galaxy',
    size: GameSetSize.SMALL,
    releaseYear: 2014,
    series: Series.MAINLINE,
  };

  public static readonly HEROES_OF_ASGARD: IGameSet = {
    id: '9adad8eb-55b4-4fbe-b6db-f6a0c35cf809',
    name: 'Heroes of Asgard',
    size: GameSetSize.SMALL,
    releaseYear: 2020,
    series: Series.MAINLINE,
  };

  public static readonly INTO_THE_COSMOS: IGameSet = {
    id: '554ea673-4af1-4ad0-99ed-137672a9bfb7',
    name: 'Into the Cosmos',
    size: GameSetSize.MEDIUM,
    releaseYear: 2020,
    series: Series.MAINLINE,
  };

  public static readonly LEGENDARY: IGameSet = {
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)',
    size: GameSetSize.CORE,
    releaseYear: 2012,
    series: Series.MAINLINE,
  };

  public static readonly MARVEL_STUDIOS: IGameSet = {
    id: 'ff993ba1-8ebd-46fc-9d90-b9f05ecf68f3',
    name: 'Marvel Studios, Phase 1',
    size: GameSetSize.CORE,
    releaseYear: 2018,
    series: Series.MCU,
  };

  public static readonly NEW_MUTANTS: IGameSet = {
    id: 'cf99b0a5-b30a-44b9-a50d-fcca4f446d35',
    name: 'The New Mutants',
    size: GameSetSize.SMALL,
    releaseYear: 2020,
    series: Series.MAINLINE,
  };

  public static readonly NOIR: IGameSet = {
    id: '72ab07ee-ed03-41a8-8827-862786f6dcf4',
    name: 'Marvel Noir',
    size: GameSetSize.SMALL,
    releaseYear: 2017,
    series: Series.MAINLINE,
  };

  public static readonly PAINT_THE_TOWN_RED: IGameSet = {
    id: 'a4849376-1467-4e32-ad74-f63ff17f6979',
    name: 'Paint the Town Red',
    size: GameSetSize.SMALL,
    releaseYear: 2014,
    series: Series.MAINLINE,
  };

  public static readonly REALM_OF_KINGS: IGameSet = {
    id: '7b927bf3-8bfc-482d-9f22-b59d44ba43fd',
    name: 'Realm of Kings',
    size: GameSetSize.SMALL,
    releaseYear: 2020,
    series: Series.MAINLINE,
  };

  public static readonly REVELATIONS: IGameSet = {
    id: 'fc3f38d4-ebbd-4625-af94-e741f817e46c',
    name: 'Revelations',
    size: GameSetSize.MEDIUM,
    releaseYear: 2019,
    series: Series.MAINLINE,
  };

  public static readonly SECRET_WARS_VOLUME_1: IGameSet = {
    id: '86f4ca6f-03f7-4a81-87fd-62256ee21e95',
    name: 'Secret Wars, Volume 1',
    size: GameSetSize.LARGE,
    releaseYear: 2015,
    series: Series.MAINLINE,
  };

  public static readonly SECRET_WARS_VOLUME_2: IGameSet = {
    id: 'afcbc2f7-117a-40e0-9b6c-73669162e046',
    name: 'Secret Wars, Volume 2',
    size: GameSetSize.LARGE,
    releaseYear: 2015,
    series: Series.MAINLINE,
  };

  public static readonly SHIELD: IGameSet = {
    id: 'b5672b69-d1a8-4d74-a0ad-f8488c32b488',
    name: 'S.H.I.E.L.D.',
    size: GameSetSize.SMALL,
    releaseYear: 2019,
    series: Series.MAINLINE,
  };

  public static readonly SPIDERMAN_HOMECOMING: IGameSet = {
    id: 'f4574d86-23e2-44fd-b52d-ba8dd3716040',
    name: 'Spider-Man Homecoming',
    size: GameSetSize.SMALL,
    releaseYear: 2017,
    series: Series.MCU,
  };

  public static readonly THREE_D: IGameSet = {
    id: '330cecd8-4fbc-46ea-ba4a-8e3742b1770f',
    name: 'Playable MArvel 3D Trading Cards',
    size: GameSetSize.PROMO,
    releaseYear: 2015,
    series: Series.MAINLINE,
  };

  public static readonly VENOM: IGameSet = {
    id: '491904ed-830a-40d3-b8a4-8e62d5ca7a96',
    name: 'Venom',
    size: GameSetSize.SMALL,
    releaseYear: 2019,
    series: Series.MAINLINE,
  };

  public static readonly VILLAINS: IGameSet = {
    id: '55909ec0-6526-4e4e-83da-d4ce8dfac693',
    name: 'Villains',
    size: GameSetSize.CORE,
    releaseYear: 2014,
    series: Series.VILLAINS,
  };

  public static readonly WORLD_WAR_HULK: IGameSet = {
    id: '485cf58f-e75d-4cb3-9bb3-d80e04448745',
    name: 'World War Hulk',
    size: GameSetSize.LARGE,
    releaseYear: 2018,
    series: Series.MAINLINE,
  };

  public static readonly X_MEN: IGameSet = {
    id: 'f1a6e975-0785-491f-9ab3-712bc05f9a34',
    name: 'X-Men',
    size: GameSetSize.LARGE,
    releaseYear: 2017,
    series: Series.MAINLINE,
  };

  public static readonly ALL = [
    GameSets.ANT_MAN,
    GameSets.CAPTAIN_AMERICA,
    GameSets.CHAMPIONS,
    GameSets.CIVIL_WAR,
    GameSets.DARK_CITY,
    GameSets.DEADPOOL,
    GameSets.DIMENSIONS,
    GameSets.FANTASTIC_FOUR,
    GameSets.FEAR_ITSELF,
    GameSets.GUARDIANS_OF_THE_GALAXY,
    GameSets.HEROES_OF_ASGARD,
    GameSets.INTO_THE_COSMOS,
    GameSets.LEGENDARY,
    GameSets.MARVEL_STUDIOS,
    GameSets.NEW_MUTANTS,
    GameSets.NOIR,
    GameSets.PAINT_THE_TOWN_RED,
    GameSets.REALM_OF_KINGS,
    GameSets.REVELATIONS,
    GameSets.SECRET_WARS_VOLUME_1,
    GameSets.SECRET_WARS_VOLUME_2,
    GameSets.SHIELD,
    GameSets.SPIDERMAN_HOMECOMING,
    GameSets.THREE_D,
    GameSets.VENOM,
    GameSets.VILLAINS,
    GameSets.WORLD_WAR_HULK,
    GameSets.X_MEN,
  ].sort((a, b) => {
    if (a.size > b.size) return -1;
    else if (a.size < b.size) return 1;
    else {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      if (nameA < nameB) return -1;
      else if (nameA > nameB) return 1;
      else return 0;
    }
  });
}
