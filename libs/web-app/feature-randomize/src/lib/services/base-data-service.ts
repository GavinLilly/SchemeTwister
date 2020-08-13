import { IBase } from '@legendizer/shared/models';
import { Subject, Observable } from 'rxjs';

abstract class BaseDataService<T> {
  protected records: T[];
  protected chosen: Subject<T | T[]>;

  constructor(dataSet: T[]) {
    this.records = dataSet;
  }
}

export abstract class BaseSingleDataService<
  T extends IBase
> extends BaseDataService<T> {
  protected chosen = new Subject<T>();

  public shuffle(): void {
    this.chosen.next(
      this.records[Math.floor(Math.random() * this.records.length)]
    );
  }

  public getChosen(): Observable<T> {
    return this.chosen.asObservable();
  }
}

export abstract class BaseMultiDataService<
  T extends IBase
> extends BaseDataService<T> {
  protected chosen = new Subject<T[]>();

  /**
   * getRandom will recursively pick a number of records based on the passed in
   * count and return an array of the picked records
   * @param count The number of records required
   * @param include An optional array of records to include in the returned records. This ensures that the same entry isn't chosen twice
   * @param exclude An optional array of records to exclude from the shuffling
   */
  protected shuffle(count: number, include: T[] = [], exclude: T[] = []): void {
    function getRandomElement(arr: T[]) {
      if (include.length < count) {
        include.push(arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);

        return getRandomElement(arr);
      } else {
        return include;
      }
    }

    const availRecords =
      exclude.length > 0
        ? this.records.filter((record) => !exclude.includes(record))
        : this.records;

    if (include.length > 0)
      this.chosen.next(
        getRandomElement(
          availRecords.filter((record) => !include.includes(record))
        )
      );
    else this.chosen.next(getRandomElement([...availRecords]));
  }

  public getChosen(): Observable<T[]> {
    return this.chosen.asObservable();
  }
}
