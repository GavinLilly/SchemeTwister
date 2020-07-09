import { Observable, of } from 'rxjs';
import { GameSet } from '@legendizer/shared/gameSet/types';
import { Base } from '@legendizer/shared/base/types';

export abstract class BaseDataService<T extends Base> {
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

  getRandom(count: number): Observable<T[]> {
    const elements: T[] = [];

    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    return of(getRandomElement([...this.records]));
  }
}
