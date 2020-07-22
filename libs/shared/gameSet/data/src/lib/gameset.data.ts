import { IGameSet } from '@legendizer/shared/gameSet/types';

type GameSetNames = 'LEGENDARY' | 'DARK_CITY';

export const GameSets: Record<GameSetNames, IGameSet> = {
  LEGENDARY: {
    id: 'aa4eb824-5316-4f0d-bca7-a072b58dee5d',
    name: 'Legendary (base set)'
  },
  DARK_CITY: {
    id: '98e9c054-e151-4126-9b75-55794e67e35a',
    name: 'Dark City'
  }
}
