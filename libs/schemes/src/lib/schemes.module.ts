import { Module } from '@nestjs/common';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { SchemesController } from './schemes.controller';

@Module({
  controllers: [SchemesController],
  imports: [BoilerplateModule]
})
export class SchemesModule {}
