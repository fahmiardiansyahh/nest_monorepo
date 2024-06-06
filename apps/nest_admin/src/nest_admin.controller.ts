import { Controller, Get } from '@nestjs/common';
import { NestAdminService } from './nest_admin.service';

@Controller()
export class NestAdminController {
  constructor(private readonly nestAdminService: NestAdminService) {}

  @Get()
  getHello(): string {
    return this.nestAdminService.getHello();
  }
}
