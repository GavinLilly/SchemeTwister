import { IHero } from '@legendizer/api-interfaces';
import { Base } from './base.model';
import { IsString } from 'class-validator';

export class Hero extends Base implements IHero {
  @IsString()
  team?: string;
}
