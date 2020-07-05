import { Module } from '@nestjs/common';

import { GamesetsController } from './gamesets.controller';
import { InMemoryDBModule } from 'in-memory-db-uuid';

@Module({
  controllers: [GamesetsController],
  imports: [ InMemoryDBModule.forFeature('gamesets', {}) ]
})
export class GamesetsModule {}
