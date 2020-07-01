import { Controller } from '@nestjs/common';
import { MastermindModel } from "@legendizer/models";
import { Masterminds } from "@legendizer/data-repository";
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService } from 'in-memory-db-uuid';

@Controller('masterminds')
export class MastermindsController extends BoilerplateController<MastermindModel> {
  constructor(@InjectInMemoryDBService('masterminds') protected readonly mastermindsService: BoilerplateService<MastermindModel>) {
    super(mastermindsService);
    mastermindsService.records = plainToClass(MastermindModel, Masterminds);
  }
}
