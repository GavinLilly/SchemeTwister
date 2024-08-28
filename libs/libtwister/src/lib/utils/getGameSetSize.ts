import { GAME_SET_SIZE, GameSetSize } from '../model';

export interface IGameSetSizeWithoutHeroes {
  numMasterminds: number;
  numVillains: number;
  numHenchmen: number;
  numBystanders: number;
  numSchemes: number;
}

interface IGameSetSize extends IGameSetSizeWithoutHeroes {
  numHeroes: number;
}

export function getGamesetSize(gameSetSize: GameSetSize): IGameSetSize {
  switch (gameSetSize) {
    case GAME_SET_SIZE.core:
    case GAME_SET_SIZE.large:
      return {
        numHeroes: 15,
        numMasterminds: 5,
        numVillains: 6,
        numHenchmen: 2,
        numBystanders: 1,
        numSchemes: 4,
      };
    case GAME_SET_SIZE.medium:
      return {
        numHeroes: 9,
        numMasterminds: 3,
        numVillains: 4,
        numHenchmen: 2,
        numBystanders: 3,
        numSchemes: 4,
      };
    case GAME_SET_SIZE.small:
      return {
        numHeroes: 5,
        numMasterminds: 2,
        numVillains: 2,
        numHenchmen: 0,
        numBystanders: 0,
        numSchemes: 4,
      };
    default:
      return {
        numHeroes: 5,
        numMasterminds: 1,
        numVillains: 1,
        numHenchmen: 0,
        numBystanders: 1,
        numSchemes: 1,
      };
  }
}
