import { Controller, Get, Res, Param } from '@nestjs/common';
import { VillainsService } from './villains.service';
import { IVillainGroup } from "@legendizer/api-interfaces";

@Controller('villains')
export class VillainsController {
  constructor(private villainsService: VillainsService) {}

  @Get()
  async findAll() : Promise<Array<IVillainGroup>>{
    return await this.villainsService.find();
  }

  @Get('random')
  async findRandom(@Res() res) : Promise<string> {
    return res.redirect(303, `/api/villains/${await this.villainsService.findRandom()}`)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<IVillainGroup> {
    return await this.villainsService.findOne(id);
  }
}
