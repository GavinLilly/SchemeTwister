import { Module } from '@nestjs/common';
import { VillainsController } from './villains.controller';
import { BoilerplateModule } from "@legendizer/boilerplate";

@Module({
  controllers: [VillainsController],
  imports: [BoilerplateModule]
})
export class VillainsModule {}
