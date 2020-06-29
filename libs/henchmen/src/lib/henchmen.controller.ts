import { Controller, Get, Res, Param } from '@nestjs/common';
import { HenchmenService } from './henchmen.service';
import { IHenchmen } from '@legendizer/api-interfaces';

@Controller('henchmen')
export class HenchmenController {
  constructor(private henchmenService: HenchmenService) {}

  @Get()
  async findAll() : Promise<Array<IHenchmen>>{
    return await this.henchmenService.find();
  }

  @Get('random')
  async findRandom(@Res() res) : Promise<string> {
    return res.redirect(303, `/api/henchmen/${await this.henchmenService.findRandom()}`)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<IHenchmen> {
    return await this.henchmenService.findOne(id);
  }
}
