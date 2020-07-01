import { Module } from '@nestjs/common';
import { HenchmenController } from './henchmen.controller';
import { BoilerplateModule } from "@legendizer/boilerplate";

@Module({
  controllers: [HenchmenController],
  imports: [BoilerplateModule]
})
export class HenchmenModule {}
