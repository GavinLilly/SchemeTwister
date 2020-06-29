import { Test } from '@nestjs/testing';
import { MastermindsController } from './masterminds.controller';
import { MastermindsService } from './masterminds.service';

describe('MastermindsController', () => {
  let controller: MastermindsController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MastermindsService],
      controllers: [MastermindsController],
    }).compile();

    controller = module.get(MastermindsController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
