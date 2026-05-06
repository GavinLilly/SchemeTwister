import { testGameSet } from '@schemetwister/libtwister/testing';
import { describe, it, expect } from 'vitest';

import { X_MEN } from '../../teams';

import { GAME_SET as gameSet } from './xMen.gameset';

testGameSet({
  gameSet,
  numBystanders: 10,
  numHeroes: 15,
  numVillains: 7,
  numHenchmen: 5,
  numMasterminds: 6,
  numSchemes: 8,
});

describe('X-Men game set', () => {
  it('should contain only X-Men heroes', () =>
    expect(gameSet.heroes.every((hero) => hero.team === X_MEN)).toBeTruthy());
});
