import { Test } from '@nestjs/testing';
import { SchemesController } from './schemes.controller';
import { SchemesService } from './schemes.service';

describe('SchemesController', () => {
  let controller: SchemesController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [SchemesService],
      controllers: [SchemesController],
    }).compile();

    controller = module.get(SchemesController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
