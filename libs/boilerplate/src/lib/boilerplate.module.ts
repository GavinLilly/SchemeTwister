import { Module } from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';

@Module({
  providers: [BoilerplateService],
  exports: [BoilerplateService],
})
export class BoilerplateModule {}
