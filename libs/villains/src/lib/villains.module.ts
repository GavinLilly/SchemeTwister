import { Module } from '@nestjs/common';
import { VillainsController } from './villains.controller';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { InMemoryDBModule } from 'in-memory-db-uuid';

@Module({
  controllers: [VillainsController],
  imports: [
    InMemoryDBModule.forFeature('villains', {}),
    BoilerplateModule
  ]
})
export class VillainsModule {}
