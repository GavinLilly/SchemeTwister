import { Module } from '@nestjs/common';
import { HenchmenService } from './henchmen.service';
import { HenchmenController } from './henchmen.controller';

@Module({
  controllers: [HenchmenController],
  providers: [HenchmenService],
  exports: [HenchmenService],
})
export class HenchmenModule {}
