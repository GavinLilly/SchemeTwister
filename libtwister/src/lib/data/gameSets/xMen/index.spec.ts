import { X_MEN } from '../../teams';
import { gameSetTest } from '../gameSetTests';

import XMEN from './index';

gameSetTest(XMEN, 10, 15, 7, 5, 12, 8);

describe('X-Men game set', () => {
  it('should contain only X-Men heroes', () =>
    expect(XMEN.heroes.every((hero) => hero.team === X_MEN)).toBeTruthy());
});
