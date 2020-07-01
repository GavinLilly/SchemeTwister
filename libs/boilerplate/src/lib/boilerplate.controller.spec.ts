import { Test } from '@nestjs/testing';
import { BoilerplateController } from './boilerplate.controller';
import { BoilerplateService } from './boilerplate.service';

describe('BoilerplateController', () => {
  let controller: BoilerplateController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [BoilerplateService],
      controllers: [BoilerplateController],
    }).compile();

    controller = module.get(BoilerplateController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
