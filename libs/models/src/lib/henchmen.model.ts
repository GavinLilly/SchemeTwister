import { Base } from './base.model';
import { IHenchmen } from '@legendizer/api-interfaces';
import { IsString, IsPositive, IsNumber } from 'class-validator';

export class Henchmen extends Base implements IHenchmen {
  @IsString()
  fight: string;

  @IsNumber()
  attackPoints: number;

  @IsNumber()
  @IsPositive()
  victoryPoints: number;
}
