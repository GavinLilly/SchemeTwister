import { Test, TestingModule } from '@nestjs/testing';

import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';

describe('AppController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [HeroesController],
      providers: [HeroesService],
    }).compile();
  });
});
