import { Controller } from '@nestjs/common';
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { HeroModel } from '@legendizer/models';
import { Heroes } from '@legendizer/data-repository';
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService } from 'in-memory-db-uuid';

@Controller('heroes')
export class HeroesController extends BoilerplateController<HeroModel> {
  constructor(@InjectInMemoryDBService('heroes') protected readonly heroesService: BoilerplateService<HeroModel>) {
    super(heroesService);
    heroesService.records = plainToClass(HeroModel, Heroes);
  }
}
