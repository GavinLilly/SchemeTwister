import { Controller } from '@nestjs/common';
import { BoilerplateController } from '@legendizer/boilerplate';
import { SchemeModel } from '@legendizer/models';
import { Schemes } from '@legendizer/data-repository';
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService, InMemoryDBService } from 'in-memory-db-uuid';

@Controller('schemes')
export class SchemesController extends BoilerplateController<SchemeModel> {
  constructor(
    @InjectInMemoryDBService('schemes')
    protected readonly schemesService: InMemoryDBService<SchemeModel>
  ) {
    super(schemesService);
    schemesService.records = plainToClass(SchemeModel, Schemes);
  }
}
