import { BaseModel } from './base.model';
import { IsString, IsPositive, IsNumber } from 'class-validator';

export class BystanderModel extends BaseModel {
  @IsPositive()
  copies: number;

  @IsNumber()
  victory_points: number;
}
