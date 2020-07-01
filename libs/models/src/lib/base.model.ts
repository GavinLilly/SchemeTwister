import { IsString, IsUUID } from 'class-validator';

import { IBase } from '@legendizer/api-interfaces';
import { Expose } from 'class-transformer';

export class BaseModel implements IBase {
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
