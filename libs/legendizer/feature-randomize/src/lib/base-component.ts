import { BaseDataService } from './base-data-service';

export abstract class BaseComponent<T> {
  public selectedRecord: T = {} as T;

  constructor(protected service: BaseDataService<T>) {}

  public randomize() {
    this.service
      .getRandom(1)
      .subscribe((mastermind) => (this.selectedRecord = mastermind[0]));
  }
}
