import { Test } from '@nestjs/testing';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HeroesService],
    }).compile();

    service = module.get(HeroesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
