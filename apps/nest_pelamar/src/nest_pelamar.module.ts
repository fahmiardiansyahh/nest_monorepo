import { Module } from '@nestjs/common';
import { NestPelamarController } from './nest_pelamar.controller';
import { NestPelamarService } from './nest_pelamar.service';

@Module({
  imports: [],
  controllers: [NestPelamarController],
  providers: [NestPelamarService],
})
export class NestPelamarModule {}
