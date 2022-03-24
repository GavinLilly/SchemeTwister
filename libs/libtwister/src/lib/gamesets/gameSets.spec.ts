import { GameSetSize } from './gameset.interface';
import { GameSets } from './gameSets';

describe('Gamesets', () => {
  it('should have 31 entries', () => expect(GameSets.ALL).toHaveLength(31));
  it('should have no more than 6 big boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.LARGE).length
    ).toBeLessThanOrEqual(6));
  it('should have no more than 18 small boxes', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.SMALL).length
    ).toBeLessThanOrEqual(18));
  it('should have no more than 3 medium box', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.MEDIUM).length
    ).toBeLessThanOrEqual(3));
  it('should have no more than 3 core sets', () =>
    expect(
      GameSets.ALL.filter((item) => item.size === GameSetSize.CORE).length
    ).toBeLessThanOrEqual(3));
});
