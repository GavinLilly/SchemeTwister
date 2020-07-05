import { Get, Body, Param, Req, Res, Query } from '@nestjs/common';
import { InMemoryDBService } from 'in-memory-db-uuid';
import { isString } from 'util';
import { BaseModel } from '@legendizer/models';

export abstract class BoilerplateController<T extends BaseModel> {
  constructor(protected readonly boilerplateService: InMemoryDBService<T>) {}

  @Get()
  public getMany(
    @Body() ids?: Array<T['id']>,
    @Query('gamesetid') gameSetID?: String
  ): T[] {
    if (ids && Array.isArray(ids)) {
      return this.boilerplateService.getMany(ids);
    } else if (gameSetID && isString(gameSetID)) {
      return this.boilerplateService.query(
        (record) => record.gameSetID === gameSetID
      );
    }
    return this.boilerplateService.getAll();
  }

  @Get('random')
  public getRandom(
    @Req() req,
    @Res() res,
    @Query('gamesetid') gameSetID?: String
  ): string {
    let results: Array<T>;
    if (gameSetID && isString(gameSetID)) {
      results = this.boilerplateService.query(
        (record) => record.gameSetID === gameSetID
      );
    } else {
      results = this.boilerplateService.getAll();
    }

    const urlParts = req.url.replace(
      'random',
      results[Math.floor(Math.random() * results.length)]
    );
    return res.redirect(303, urlParts);
  }

  @Get(':id')
  public get(@Param('id') id: T['id']): T {
    return this.boilerplateService.get(id);
  }
}
