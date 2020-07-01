import { Controller } from '@nestjs/common';
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { HeroModel } from '@legendizer/models';
import { Heroes } from '@legendizer/data-repository';
import { plainToClass } from 'class-transformer';

@Controller('heroes')
export class HeroesController extends BoilerplateController<HeroModel> {
  constructor(protected heroService: BoilerplateService<HeroModel>) {
    super(heroService);
    heroService.records = plainToClass(HeroModel, Heroes);
  }
}
