import { Module } from '@nestjs/common';
import { MastermindsController } from './masterminds.controller';
import { BoilerplateModule } from "@legendizer/boilerplate";

@Module({
  controllers: [MastermindsController],
  imports: [BoilerplateModule]
})
export class MastermindsModule {}
