import { IGameSet } from '@legendizer/shared/gameSet/types';
import { IBase } from '@legendizer/shared/base/types';

export abstract class BaseDataService<T extends IBase> {
  private records: T[];

  constructor(dataSet: T[]) {
    this.records = dataSet;
  }

  get(limitGamesets?: IGameSet[]): T[] {
    if (limitGamesets) {
      return this.records.filter((record) =>
        limitGamesets.includes(record.gameSet)
      );
    } else {
      return this.records;
    }
  }
}
