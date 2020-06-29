import { Controller, Get, Res, Param } from '@nestjs/common';
import { SchemesService } from './schemes.service';
import { IScheme } from '@legendizer/api-interfaces';

@Controller('schemes')
export class SchemesController {
  constructor(private schemesService: SchemesService) {}

  @Get()
  async findAll() : Promise<Array<IScheme>>{
    return await this.schemesService.find();
  }

  @Get('random')
  async findRandom(@Res() res) {
    return res.redirect(303, `/api/schemes/${await this.schemesService.findRandom()}`)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<IScheme> {
    return await this.schemesService.findOne(id);
  }
}
