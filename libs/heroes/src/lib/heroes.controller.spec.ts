import { Test } from '@nestjs/testing';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

describe('HeroesController', () => {
  let controller: HeroesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HeroesService],
      controllers: [HeroesController],
    }).compile();

    controller = module.get(HeroesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
