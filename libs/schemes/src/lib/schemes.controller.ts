import { Controller } from '@nestjs/common';
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { SchemeModel } from '@legendizer/models';
import { Schemes } from '@legendizer/data-repository';
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService } from 'in-memory-db-uuid';

@Controller('schemes')
export class SchemesController extends BoilerplateController<SchemeModel> {
  constructor(@InjectInMemoryDBService('schemes') protected readonly schemesService: BoilerplateService<SchemeModel>) {
    super(schemesService);
    schemesService.records = plainToClass(SchemeModel, Schemes);
  }
}
