import { Controller } from '@nestjs/common';
import { BoilerplateController, BoilerplateService } from "@legendizer/boilerplate";
import { VillainGroupModel } from "@legendizer/models";
import { VillainGroups } from '@legendizer/data-repository';
import { plainToClass } from 'class-transformer';
import { InjectInMemoryDBService } from 'in-memory-db-uuid';

@Controller('villains')
export class VillainsController extends BoilerplateController<VillainGroupModel> {
  constructor(@InjectInMemoryDBService('villains') protected readonly villainsService: BoilerplateService<VillainGroupModel>) {
    super(villainsService);
    villainsService.records = plainToClass(VillainGroupModel, VillainGroups);
  }
}
