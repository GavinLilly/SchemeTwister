import { Controller, Get, Res, Param } from '@nestjs/common';
import { MastermindsService } from './masterminds.service';
import { IMastermind } from "@legendizer/api-interfaces";

@Controller('masterminds')
export class MastermindsController {
  constructor(private mastermindsService: MastermindsService) {}

  @Get()
  async findAll() : Promise<Array<IMastermind>>{
    return await this.mastermindsService.find();
  }

  @Get('random')
  async findRandom(@Res() res) : Promise<string> {
    return res.redirect(303, `/api/masterminds/${await this.mastermindsService.findRandom()}`)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<IMastermind> {
    return await this.mastermindsService.findOne(id);
  }
}
