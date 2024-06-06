import { Module } from '@nestjs/common';
import { ApiBuilderService } from './api_builder.service';

@Module({
  providers: [ApiBuilderService],
  exports: [ApiBuilderService],
})
export class ApiBuilderModule {}
