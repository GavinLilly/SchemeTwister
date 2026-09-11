import { beforeAll, describe, expect, it } from 'vitest';

import { MockGameSetFactory } from '../../../mocks/mock-game-set.factory';
import { GameSet } from '../../game-set';

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
