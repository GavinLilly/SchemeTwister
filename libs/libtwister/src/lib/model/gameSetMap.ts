import { GameSet } from './GameSet';
import { GameSetSize, Series } from './types';

/**
 * An extension of a Map specifically for Game Sets.
 */
export class GameSetMap extends Map<string, GameSet> {
  /**
   * Returns the GameSets from the map as an array, optionally limiting by size
   * or set.
   * @param limitBy An optional config that allows to limit the array
   * @param limitBy.size Limit the game sets to only those of the chosen size
   * @param limitBy.series Limit the game sets to only those from the chosen series
   * @returns An array of GameSets
   */
  public asArray(limitBy?: { size?: GameSetSize; series?: Series }): GameSet[] {
    const thisAsArray = Array.from(this.values());

    if (limitBy?.series) {
      return thisAsArray.filter((gameSet) => gameSet.series === limitBy.series);
    }

    if (limitBy?.size) {
      return thisAsArray.filter((gameSet) => gameSet.size === limitBy.size);
    }

    return thisAsArray;
  }
}
