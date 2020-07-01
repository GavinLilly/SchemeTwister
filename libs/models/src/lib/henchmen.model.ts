import { BaseModel } from './base.model';
import { IHenchmen } from '@legendizer/api-interfaces';
import { IsString, IsPositive, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class HenchmenModel extends BaseModel implements IHenchmen {
  @Expose()
  @IsString()
  fight: string;

  @Expose()
  @IsNumber()
  attackPoints: number;

  @Expose()
  @IsNumber()
  @IsPositive()
  victoryPoints: number;
}
