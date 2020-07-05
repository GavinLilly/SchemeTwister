import { Type } from 'class-transformer';

import { IScheme } from '@legendizer/api-interfaces';
import { RulesModel } from './rules.model';

import { BaseModel } from './base.model';
import { IsString, IsNumber, IsPositive, IsUUID } from 'class-validator';

export class SchemeModel extends BaseModel implements IScheme {
  // API public members
  @IsString()
  twist: string;

  @IsString()
  evilWins: string;

  @IsString()
  setup: string;

  @IsString()
  specialRules?: string;

  // API private members
  @IsNumber()
  @IsPositive()
  numWounds?: number;

  @IsNumber()
  @IsPositive()
  numBystandersInVillainDeck?: number;

  @IsUUID()
  requiredVillainsID: string;

  @Type(() => RulesModel)
  rules: RulesModel;
}
