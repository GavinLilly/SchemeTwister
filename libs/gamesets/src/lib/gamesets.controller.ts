import { Controller, Get, Body, Param } from '@nestjs/common';

import { GameSetModel, HenchmenModel } from '@legendizer/models';
import { GameSets } from '@legendizer/data-repository';
import { InMemoryDBService, InjectInMemoryDBService } from 'in-memory-db-uuid';
import { plainToClass } from 'class-transformer';

@Controller('gamesets')
export class GamesetsController {
  constructor(
    @InjectInMemoryDBService('gamesets')
    private readonly gameSetService: InMemoryDBService<GameSetModel>
  ) {
    gameSetService.records = plainToClass(GameSetModel, GameSets);
  }

  @Get()
  public getMany(@Body() ids?: Array<GameSetModel['id']>): GameSetModel[] {
    if (ids && Array.isArray(ids)) {
      return this.gameSetService.getMany(ids);
    }
    return this.gameSetService.getAll();
  }

  @Get(':id')
  public get(@Param('id') id: GameSetModel['id']): GameSetModel {
    return this.gameSetService.get(id);
  }
}
