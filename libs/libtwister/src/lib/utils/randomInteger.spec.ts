import { randomInteger } from './randomInteger';

describe('randomInteger', () => {
  it('should be between 5 and 10', () => {
    const random = randomInteger(5, 10);

    expect(random).toBeGreaterThanOrEqual(5);
    expect(random).toBeLessThanOrEqual(10);
  });

  it('should be between 0 and 10', () => {
    const random2 = randomInteger(10);

    expect(random2).toBeGreaterThanOrEqual(0);
    expect(random2).toBeLessThanOrEqual(10);
  });
});
