import { v5 as uuidV5 } from 'uuid';

export class SetBuilder {
  public static buildGameSet(dataSet: Array<any>, gameSet: string): Array<any> {
    const appUuid = '4ddb74f2-e4d4-46a6-8231-ae9339c6095c';
    const gameSetID = uuidV5(gameSet, appUuid);
    return dataSet.map((d) => {
      d['id'] = uuidV5(`${gameSet}${d['name']}`, appUuid);
      d['gameSet'] = {
        id: gameSetID,
        name: gameSet
      };
      return d;
    });
  }
}
