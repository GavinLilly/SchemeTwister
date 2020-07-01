import { IMastermind } from '@legendizer/api-interfaces';
import { BaseModel } from './base.model';
import { IsUUID } from 'class-validator';

export class MastermindModel extends BaseModel implements IMastermind {
  @IsUUID()
  alwaysLeadsID: string;
}
