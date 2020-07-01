import { Injectable, Optional } from '@nestjs/common';
import { InMemoryDBService, InMemoryDBEntity, InMemoryDBConfig } from "in-memory-db-uuid";

import { BaseModel } from "@legendizer/models";

/**
 * Boilerplate service based on the in-memory-db service at
 * https://github.com/nestjs-addons/in-memory-db/blob/master/lib/services/in-memory-db.service.ts
 */
@Injectable()
export class BoilerplateService<T extends InMemoryDBEntity> extends InMemoryDBService<T> {
  constructor(@Optional() private readonly boilerConfig: InMemoryDBConfig) {
    super(boilerConfig);
  }
}
