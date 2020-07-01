import { Get, Body, Param, Res } from '@nestjs/common';
import { BoilerplateService } from './boilerplate.service';
import { BaseModel } from '@legendizer/models';

export abstract class BoilerplateController<T extends BaseModel> {
  constructor(protected readonly boilerplateService: BoilerplateService<T>) {}

  @Get()
  public getMany(@Body() ids?: Array<T['id']>): T[] {
    if (ids && Array.isArray(ids)) {
      return this.boilerplateService.getMany(ids);
    }
    return this.boilerplateService.getAll();
  }

  @Get('random')
  public getRandom(@Res() res): string {
    return this.boilerplateService.getRandom().id;
  }

  @Get(':id')
  public get(@Param('id') id: T['id']): T {
    return  this.boilerplateService.get(id);
  }
}
