import { gameSetTest } from '@schemetwister/libtwister/testing';

import { X_MEN } from '../../teams';

import { GAME_SET } from './xMen.gameset';

gameSetTest(GAME_SET, 10, 15, 7, 5, 6, 8);

describe('X-Men game set', () => {
  it('should contain only X-Men heroes', () =>
    expect(GAME_SET.heroes.every((hero) => hero.team === X_MEN)).toBeTruthy());
});
