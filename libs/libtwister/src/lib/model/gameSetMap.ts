import { GameSet } from './GameSet';
import { GameSetSize } from './gameSetSize.enum';
import { Series } from './series.enum';

export class GameSetMap extends Map<string, GameSet> {
  public asArray(limitBy?: { size?: GameSetSize; series?: Series }): GameSet[] {
    let thisAsArray = Array.from(this.values());

    if (limitBy !== undefined) {
      if (limitBy.series !== undefined) {
        thisAsArray = thisAsArray.filter(
          (gameSet) => gameSet.series === limitBy.series
        );
      }

      if (limitBy.size !== undefined) {
        thisAsArray = thisAsArray.filter(
          (gameSet) => gameSet.size === limitBy.size
        );
      }
    }

    return thisAsArray;
  }
}
