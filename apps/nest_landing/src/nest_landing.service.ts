import { Injectable } from '@nestjs/common';

@Injectable()
export class NestLandingService {
  getHello(): string {
    return 'Hello World!';
  }
}
