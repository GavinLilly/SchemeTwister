import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { HenchmenModule } from "@legendizer/henchmen";
import { HeroesModule } from "@legendizer/heroes";
import { MastermindsModule } from "@legendizer/masterminds";
import { SchemesModule } from "@legendizer/schemes";
import { VillainsModule } from "@legendizer/villains";

@Module({
  imports: [
    HenchmenModule,
    HeroesModule,
    VillainsModule,
    MastermindsModule,
    SchemesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
