import { Test } from '@nestjs/testing';
import { BoilerplateService } from './boilerplate.service';

describe('BoilerplateService', () => {
  let service: BoilerplateService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BoilerplateService],
    }).compile();

    service = module.get(BoilerplateService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
