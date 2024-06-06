import { Test, TestingModule } from '@nestjs/testing';
import { NestPelamarController } from './nest_pelamar.controller';
import { NestPelamarService } from './nest_pelamar.service';

describe('NestPelamarController', () => {
  let nestPelamarController: NestPelamarController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestPelamarController],
      providers: [NestPelamarService],
    }).compile();

    nestPelamarController = app.get<NestPelamarController>(NestPelamarController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestPelamarController.getHello()).toBe('Hello World!');
    });
  });
});
