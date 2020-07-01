import { Module } from '@nestjs/common';
import { HenchmenController } from './henchmen.controller';
import { InMemoryDBModule } from 'in-memory-db-uuid';
import { BoilerplateModule } from '@legendizer/boilerplate';

@Module({
  controllers: [HenchmenController],
  imports: [
    InMemoryDBModule.forFeature('henchmen', {}),
    BoilerplateModule
  ]
})
export class HenchmenModule {}
