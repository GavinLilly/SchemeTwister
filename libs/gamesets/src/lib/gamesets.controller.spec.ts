import { Test } from '@nestjs/testing';
import { GamesetsController } from './gamesets.controller';

describe('GamesetsController', () => {
  let controller: GamesetsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [],
      controllers: [GamesetsController],
    }).compile();

    controller = module.get(GamesetsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
