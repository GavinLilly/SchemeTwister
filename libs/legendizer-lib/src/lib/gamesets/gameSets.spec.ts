import { GameSetSize } from './gameset.interface';
import { GameSets } from './gameSets';

describe('Gamesets', () => {
  it('should have 10 entries', () => expect(GameSets.ALL).toHaveLength(10));
  it('should have no more than 9 big boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.LARGE).length
    ).toBeLessThanOrEqual(9));
  it('should have no more than 16 small boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.SMALL).length
    ).toBeLessThanOrEqual(16));
  it('should have no more than 1 medium box', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.MEDIUM).length
    ).toBeLessThanOrEqual(1));
});
