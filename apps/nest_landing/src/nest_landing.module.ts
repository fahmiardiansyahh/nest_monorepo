import { Module } from '@nestjs/common';
import { NestLandingController } from './nest_landing.controller';
import { NestLandingService } from './nest_landing.service';

@Module({
  imports: [],
  controllers: [NestLandingController],
  providers: [NestLandingService],
})
export class NestLandingModule {}
