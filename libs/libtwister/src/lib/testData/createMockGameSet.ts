import { nanoid } from 'nanoid';
import * as uuid from 'uuid';

import {
  GAME_SET_SIZE,
  GameSet,
  GameSetSize,
  Henchmen,
  Hero,
  IGameSetMeta,
  Mastermind,
  SERIES,
  VillainGroup,
} from '../model';

interface IMockGameSetConfig {
  numHeroes: number;
  numMasterminds: number;
  numVillains: number;
  numHenchmen: number;
  numBystanders: number;
}

export function createMockGameSet(
  size: GameSetSize,
  config?: IMockGameSetConfig
): GameSet {
  let actualConfig: IMockGameSetConfig;
  if (config !== undefined) {
    actualConfig = config;
  } else {
    switch (size) {
      case GAME_SET_SIZE.core:
      case GAME_SET_SIZE.large:
        actualConfig = {
          numHeroes: 15,
          numMasterminds: 5,
          numVillains: 6,
          numHenchmen: 2,
          numBystanders: 1,
        };
        break;
      case GAME_SET_SIZE.medium:
        actualConfig = {
          numHeroes: 9,
          numMasterminds: 3,
          numVillains: 4,
          numHenchmen: 2,
          numBystanders: 3,
        };
        break;
      case GAME_SET_SIZE.small:
        actualConfig = {
          numHeroes: 5,
          numMasterminds: 2,
          numVillains: 2,
          numHenchmen: 0,
          numBystanders: 0,
        };
        break;
      default:
        actualConfig = {
          numHeroes: 5,
          numMasterminds: 1,
          numVillains: 1,
          numHenchmen: 0,
          numBystanders: 1,
        };
        break;
    }
  }

  const gameSetShortId = nanoid(4);

  const meta: IGameSetMeta = {
    id: uuid.v4(),
    name: `Test Game Set ${gameSetShortId}`,
    releaseYear: Math.floor(Math.random() * 2024) + 1970,
    series: SERIES.mainline,
    size,
  };

  const heroes: Hero[] = [];
  for (let i = 0; i < actualConfig.numHeroes; i++) {
    const hero = new Hero({
      id: uuid.v4(),
      name: `Test Hero - ${gameSetShortId} - ${i}`,
      gameSet: meta,
    });
    heroes.push(hero);
  }

  const villains: VillainGroup[] = [];
  for (let i = 0; i < actualConfig.numVillains; i++) {
    const villain = new VillainGroup({
      id: uuid.v4(),
      name: `Test Villain - ${gameSetShortId} - ${i}`,
      gameSet: meta,
    });
    villains.push(villain);
  }

  const masterminds: Mastermind[] = [];
  for (let i = 0; i < actualConfig.numMasterminds; i++) {
    const mastermind = new Mastermind({
      id: uuid.v4(),
      name: `Test Mastermind - ${gameSetShortId} - ${i}`,
      gameSet: meta,
      alwaysLeads: [villains[Math.min(i, villains.length)]],
      attackPoints: Math.random() * 10,
      victoryPoints: Math.random() * 10,
      masterStrike: '',
    });
    masterminds.push(mastermind);
  }

  const henchmens: Henchmen[] = [];
  for (let i = 0; i < actualConfig.numHenchmen; i++) {
    const henchmen = new Henchmen({
      id: uuid.v4(),
      name: `Test Henchmen - ${gameSetShortId} - ${i}`,
      gameSet: meta,
      attackPoints: Math.random() * 10,
      victoryPoints: Math.random() * 10,
      fight: '',
    });
    henchmens.push(henchmen);
  }

  return new GameSet(meta, heroes, masterminds, undefined, villains, henchmens);
}
