import { Module } from '@nestjs/common';
import { VillainsService } from './villains.service';
import { VillainsController } from './villains.controller';

@Module({
  controllers: [VillainsController],
  providers: [VillainsService],
  exports: [
    VillainsService
  ],
})
export class VillainsModule {}
