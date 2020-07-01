import { IsString, IsUUID } from 'class-validator';

import { IBase } from '@legendizer/api-interfaces';
import { Expose } from 'class-transformer';
import { InMemoryDBEntity } from "in-memory-db-uuid";

export class BaseModel implements IBase, InMemoryDBEntity {
  @Expose()
  @IsUUID()
  gameSetID: string;

  @Expose()
  @IsUUID()
  id: string;

  @Expose()
  @IsString()
  name: string;
}
