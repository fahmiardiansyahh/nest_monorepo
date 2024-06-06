import { Test, TestingModule } from '@nestjs/testing';
import { NestAdminController } from './nest_admin.controller';
import { NestAdminService } from './nest_admin.service';

describe('NestAdminController', () => {
  let nestAdminController: NestAdminController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [NestAdminController],
      providers: [NestAdminService],
    }).compile();

    nestAdminController = app.get<NestAdminController>(NestAdminController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(nestAdminController.getHello()).toBe('Hello World!');
    });
  });
});
