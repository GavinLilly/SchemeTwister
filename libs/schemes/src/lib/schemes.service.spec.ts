import { Test } from '@nestjs/testing';
import { SchemesService } from './schemes.service';

describe('SchemesService', () => {
  let service: SchemesService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SchemesService],
    }).compile();

    service = module.get(SchemesService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
