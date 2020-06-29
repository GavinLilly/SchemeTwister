import { Test } from '@nestjs/testing';
import { HenchmenService } from './henchmen.service';

describe('HenchmenService', () => {
  let service: HenchmenService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [HenchmenService],
    }).compile();

    service = module.get(HenchmenService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
