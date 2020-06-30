import { v5 as uuidV5 } from 'uuid';

export class SetBuilder {
  public static buildDeck(dataSet: Array<any>, gameSet: string): Array<any> {
    return dataSet.map((v) => {
      v['gameSetID'] = gameSet
      return v;
    });
  }
}
