import { Test } from '@nestjs/testing';
import { MastermindsService } from './masterminds.service';

describe('MastermindsService', () => {
  let service: MastermindsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [MastermindsService],
    }).compile();

    service = module.get(MastermindsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
