import { Module } from '@nestjs/common';
import { MastermindsController } from './masterminds.controller';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { InMemoryDBModule } from 'in-memory-db-uuid';

@Module({
  controllers: [MastermindsController],
  imports: [
    InMemoryDBModule.forFeature('masterminds', {}),
    BoilerplateModule
  ]
})
export class MastermindsModule {}
