import { Module } from '@nestjs/common';
import { DecryptService } from './decrypt.service';

@Module({
  providers: [DecryptService],
  exports: [DecryptService],
})
export class DecryptModule {}
