import { describe, expect, it } from 'vitest';

import { Random } from './random';

describe('randomInteger', () => {
  it('should be between 5 and 10', () => {
    const random = Random.integer(5, 10);

    expect(random).toBeGreaterThanOrEqual(5);
    expect(random).toBeLessThanOrEqual(10);
  });

  it('should be between 0 and 10', () => {
    const random2 = Random.integer(10);

    expect(random2).toBeGreaterThanOrEqual(0);
    expect(random2).toBeLessThanOrEqual(10);
  });
});
