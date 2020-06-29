import { Type, Transform } from 'class-transformer';
import { Length, Matches } from 'class-validator';

import { IBase } from '@legendizer/api-interfaces';
import { GameSet } from "./gameSet.model";

export class Base implements IBase {
  @Type(() => GameSet)
  gameSet: GameSet;

  @Length(36)
  @Matches('[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}')
  id: string;
}
