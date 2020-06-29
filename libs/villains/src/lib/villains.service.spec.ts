import { Test } from '@nestjs/testing';
import { VillainsService } from './villains.service';

describe('VillainsService', () => {
  let service: VillainsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [VillainsService],
    }).compile();

    service = module.get(VillainsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
