import { Module } from '@nestjs/common';
import { BoilerplateModule } from "@legendizer/boilerplate";
import { HeroesController } from './heroes.controller';

@Module({
  controllers: [HeroesController],
  imports: [BoilerplateModule]
})
export class HeroesModule {}
