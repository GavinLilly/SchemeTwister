import { Module } from '@nestjs/common';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { HeroesController } from './heroes.controller';
import { InMemoryDBModule } from 'in-memory-db-uuid';

@Module({
  controllers: [HeroesController],
  imports: [
    InMemoryDBModule.forFeature('heroes', {}),
    BoilerplateModule]
})
export class HeroesModule {}
