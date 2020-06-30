import { IMastermind } from '@legendizer/api-interfaces';
import { Base } from './base.model';
import { IsUUID } from 'class-validator';

export class Mastermind extends Base implements IMastermind {
  @IsUUID()
  alwaysLeadsID: string;
}
