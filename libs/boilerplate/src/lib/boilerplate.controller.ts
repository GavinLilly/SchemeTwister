import { Get, Body, Param, Req, Res } from '@nestjs/common';
import { InMemoryDBEntity, InMemoryDBService } from "in-memory-db-uuid";

export abstract class BoilerplateController<T extends InMemoryDBEntity> {
  constructor(protected readonly boilerplateService: InMemoryDBService<T>) {}

  @Get()
  public getMany(@Body() ids?: Array<T['id']>): T[] {
    if (ids && Array.isArray(ids)) {
      return this.boilerplateService.getMany(ids);
    }
    return this.boilerplateService.getAll();
  }

  @Get('random')
  public getRandom(@Req() req, @Res() res): string {
    const id = this.boilerplateService.getRandom().id;
    const urlParts = req.url.replace('random', id);
    return res.redirect(303, urlParts);
  }

  @Get(':id')
  public get(@Param('id') id: T['id']): T {
    return  this.boilerplateService.get(id);
  }
}
