import { Observable, of } from 'rxjs';
import { GameSet } from '@legendizer/shared/gameSet/types';
import { Base } from '@legendizer/shared/base/types';

export class BaseDataService<T extends Base> {
  private records: T[];

  constructor(dataSet: T[]) {
    this.records = dataSet;
  }

  get(limitGamesets?: GameSet[]): T[] {
    if (limitGamesets) {
      return this.records.filter((record) =>
        limitGamesets.includes(record.gameSet)
      );
    } else {
      return this.records;
    }
  }
}
