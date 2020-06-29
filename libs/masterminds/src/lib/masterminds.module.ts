import { Module } from '@nestjs/common';
import { MastermindsService } from './masterminds.service';
import { MastermindsController } from './masterminds.controller';

@Module({
  controllers: [MastermindsController],
  providers: [MastermindsService],
  exports: [MastermindsService],
})
export class MastermindsModule {}
