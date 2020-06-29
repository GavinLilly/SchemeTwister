import { Test } from '@nestjs/testing';
import { HenchmenController } from './henchmen.controller';
import { HenchmenService } from './henchmen.service';

describe('HenchmenController', () => {
  let controller: HenchmenController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HenchmenService],
      controllers: [HenchmenController],
    }).compile();

    controller = module.get(HenchmenController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
