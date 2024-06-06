import { Controller, Get } from '@nestjs/common';
import { NestLandingService } from './nest_landing.service';

@Controller()
export class NestLandingController {
  constructor(private readonly nestLandingService: NestLandingService) {}

  @Get()
  getHello(): string {
    return this.nestLandingService.getHello();
  }
}
