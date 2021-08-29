import { GameSetSize } from './gameset.interface';
import { GameSets } from './gameSets';

describe('Gamesets', () => {
  it('should have 28 entries', () => expect(GameSets.ALL).toHaveLength(28));
  it('should have no more than 6 big boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.LARGE).length
    ).toBeLessThanOrEqual(6));
  it('should have no more than 16 small boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.SMALL).length
    ).toBeLessThanOrEqual(16));
  it('should have no more than 2 medium box', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.MEDIUM).length
    ).toBeLessThanOrEqual(2));
  it('should have no more than 3 core sets', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.CORE).length
    ).toBeLessThanOrEqual(3));
});
