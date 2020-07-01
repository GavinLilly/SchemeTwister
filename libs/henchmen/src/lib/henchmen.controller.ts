import { Controller } from '@nestjs/common';
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { HenchmenModel } from "@legendizer/models";
import { Henchmen } from "@legendizer/data-repository";
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService } from 'in-memory-db-uuid';

@Controller('henchmen')
export class HenchmenController extends BoilerplateController<HenchmenModel> {
  constructor(@InjectInMemoryDBService('henchmen') protected readonly henchmenService: BoilerplateService<HenchmenModel>) {
    super(henchmenService);
    henchmenService.records = plainToClass(HenchmenModel, Henchmen);
  }
}
