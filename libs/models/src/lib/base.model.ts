import { Length, Matches, IsString, IsUUID } from 'class-validator';

import { IBase } from '@legendizer/api-interfaces';

export class Base implements IBase {
  @IsUUID()
  gameSetID: string;

  @IsUUID()
  id: string;

  @IsString()
  name: string;
}
