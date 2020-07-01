import { IHero } from '@legendizer/api-interfaces';
import { BaseModel } from './base.model';
import { IsString } from 'class-validator';

export class HeroModel extends BaseModel implements IHero {
  @IsString()
  team?: string;
}
