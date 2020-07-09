import { BaseDataService } from './services/base-data-service';

export abstract class BaseComponent<T> {
  public selectedRecords: T[] = []

  constructor(protected service: BaseDataService<T>) {}

  public randomize(count: number) {
    this.service
      .getRandom(count)
      .subscribe((record) => (this.selectedRecords = record));
  }
}
