import { Controller, Get, Param, Res } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { IHero } from "@legendizer/api-interfaces";

@Controller('heroes')
export class HeroesController {
  constructor(private heroesService: HeroesService) {}

  @Get()
  async findAll() : Promise<Array<IHero>>{
    return await this.heroesService.find();
  }

  @Get('random')
  async findRandom(@Res() res) : Promise<string> {
    return res.redirect(303, `/api/heroes/${await this.heroesService.findRandom()}`)
  }

  @Get(':id')
  async findOne(@Param('id') id: string) : Promise<IHero> {
    return await this.heroesService.findOne(id);
  }
}
