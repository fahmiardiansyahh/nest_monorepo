import { Test, TestingModule } from '@nestjs/testing';
import { NestLandingController } from './nest_landing.controller';
import { NestLandingService } from './nest_landing.service';

describe('NestLandingController', () => {
  let nestLandingController: NestLandingController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestLandingController],
      providers: [NestLandingService],
    }).compile();

    nestLandingController = app.get<NestLandingController>(NestLandingController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestLandingController.getHello()).toBe('Hello World!');
    });
  });
});
