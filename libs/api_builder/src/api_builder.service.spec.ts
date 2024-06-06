import { Test, TestingModule } from '@nestjs/testing';
import { ApiBuilderService } from './api_builder.service';

describe('ApiBuilderService', () => {
  let service: ApiBuilderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApiBuilderService],
    }).compile();

    service = module.get<ApiBuilderService>(ApiBuilderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
