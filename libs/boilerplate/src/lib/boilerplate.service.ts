import { Injectable } from '@nestjs/common';

import { BaseModel } from "@legendizer/models";

/**
 * Boilerplate service based on the in-memory-db service at
 * https://github.com/nestjs-addons/in-memory-db/blob/master/lib/services/in-memory-db.service.ts
 */
@Injectable()
export class BoilerplateService<T extends BaseModel> {
  private recordMap: { [id: string]: T } = {};
  constructor() {}

  set records(records: T[]) {
    if (!records || records.length === 0) {
      this.recordMap = {};
    }

    this.recordMap = records.reduce(
      (previous: { [id: number]: T }, current: T) => {
        return {
          ...previous,
          [current.id]: current,
        };
      },
      this.recordMap,
    );
  }
  get records(): T[] {
    return Object.keys(this.recordMap).map(key => this.recordMap[key]);
  }

  public get(id: string): T {
    return this.recordMap[id];
  }

  public getMany(ids: string[]): T[] {
    const records = ids
      .filter(id => this.recordMap[id])
      .map(id => {
        return this.recordMap[id];
      });

    return records;
  }

  public getAll(): T[] {
    return this.records || [];
  }

  public getRandom(): T {
    return this.records[Math.floor(Math.random() * this.records.length)];
  }

  public query(predicate: (record: T) => boolean) {
    return this.records.filter(predicate);
  }
}
