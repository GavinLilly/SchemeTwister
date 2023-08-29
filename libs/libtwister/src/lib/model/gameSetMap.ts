import { GameSet } from './GameSet';
import { GameSetSize } from './gameSetSize.enum';
import { Series } from './types';

/**
 * An extension of a Map specifically for Game Sets.
 */
export class GameSetMap extends Map<string, GameSet> {
  /**
   * Returns the GameSets from the map as an array, optionally limiting by size
   * or set.
   * @param limitBy an optional config that allows to limit the array
   * @returns an array of GameSets
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
