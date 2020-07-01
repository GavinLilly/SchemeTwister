import { Module } from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { BoilerplateController } from './boilerplate.controller';

@Module({
  providers: [BoilerplateService],
  exports: [BoilerplateService],
})
export class BoilerplateModule {}
