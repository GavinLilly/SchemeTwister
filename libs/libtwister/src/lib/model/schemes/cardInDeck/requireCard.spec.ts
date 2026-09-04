import { beforeAll, describe, expect, it } from 'vitest';

import { MockGameSetFactory } from '../../../mocks';
import { GameSet } from '../../GameSet';

import { RequireCard } from './requireCard';

describe('RequireCard', () => {
  let gameSet: GameSet;

  beforeAll(() => {
    // 15 heroes by default
    gameSet = new MockGameSetFactory().createGameSet();
  });

  it('should not allow more heroes to be required than are available', () =>
    expect(() => new RequireCard(gameSet.heroes[0], 20)).toThrow());
});
