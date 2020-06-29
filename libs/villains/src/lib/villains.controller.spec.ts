import { Test } from '@nestjs/testing';
import { VillainsController } from './villains.controller';
import { VillainsService } from './villains.service';

describe('VillainsController', () => {
  let controller: VillainsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [VillainsService],
      controllers: [VillainsController],
    }).compile();

    controller = module.get(VillainsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
