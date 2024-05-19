import { beforeAll, describe, expect, it } from 'vitest';

import { GameSetMock } from '../../../testData/gameSetMock';
import { GameSet } from '../../GameSet';
import { GAME_SET_SIZE } from '../../types';

import { RequireCard } from './requireCard';

describe('RequireCard', () => {
  let gameSet: GameSet;

  beforeAll(() => {
    // 15 heroes by default
    gameSet = new GameSetMock(GAME_SET_SIZE.core).getGameSet();
  });

  it('should not allow more heroes to be required than are available', () =>
    expect(() => new RequireCard(gameSet.heroes[0], 20)).toThrow());
});
