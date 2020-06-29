import { Module } from '@nestjs/common';
import { SchemesService } from './schemes.service';
import { SchemesController } from './schemes.controller';

@Module({
  controllers: [SchemesController],
  providers: [SchemesService],
  exports: [SchemesService],
})
export class SchemesModule {}
