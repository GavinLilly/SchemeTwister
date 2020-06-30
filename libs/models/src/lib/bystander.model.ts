import { Base } from './base.model';
import { IsString, IsPositive, IsNumber } from 'class-validator';

export class Bystander extends Base {
  @IsPositive()
  copies: number;

  @IsNumber()
  victory_points: number;
}
