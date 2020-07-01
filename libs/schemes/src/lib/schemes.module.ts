import { Module } from '@nestjs/common';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { SchemesController } from './schemes.controller';
import { InMemoryDBModule } from 'in-memory-db-uuid';

@Module({
  controllers: [SchemesController],
  imports: [
    InMemoryDBModule.forFeature('schemes', {}),
    BoilerplateModule
  ]
})
export class SchemesModule {}
