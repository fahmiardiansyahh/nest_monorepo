import { Injectable } from '@nestjs/common';

@Injectable()
export class NestPelamarService {
  getHello(): string {
    return 'Hello World!';
  }
}
