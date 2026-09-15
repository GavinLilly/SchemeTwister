import { beforeAll, describe, expect, it } from 'vitest';

import { GameSet } from '../../game-set/game-set';
import { MockGameSetFactory } from '../../testing/mocks/mock-game-set.factory';

import { RequireCard } from './require-card.behaviour';

describe('RequireCard', () => {
  let gameSet: GameSet;

  beforeAll(() => {
    // 15 heroes by default
    gameSet = new MockGameSetFactory().createGameSet();
  });

  it('should not allow more heroes to be required than are available', () =>
    expect(() => new RequireCard(gameSet.heroes[0], 20)).toThrow());
});
