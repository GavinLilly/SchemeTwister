import { Observable, of } from 'rxjs';

export abstract class BaseDataService<T> {
  private records: T[];

  constructor(dataSet: Array<T>) {
    this.records = dataSet;
  }

  getRandom(count: number): Observable<T[]> {
    const elements: T[] = [];

    function getRandomElement(arr: T[]) {
      if (elements.length < count) {
        elements.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0])

        return getRandomElement(arr);
      } else {
        return elements;
      }
    }

    return of(getRandomElement([...this.records]));
  }
}
