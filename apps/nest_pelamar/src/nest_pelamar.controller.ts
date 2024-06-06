import { Controller, Get } from '@nestjs/common';
import { NestPelamarService } from './nest_pelamar.service';

@Controller()
export class NestPelamarController {
  constructor(private readonly nestPelamarService: NestPelamarService) {}

  @Get()
  getHello(): string {
    return this.nestPelamarService.getHello();
  }
}
