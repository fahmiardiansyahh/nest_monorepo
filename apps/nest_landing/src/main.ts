import { NestFactory } from '@nestjs/core';
import { NestLandingModule } from './nest_landing.module';

async function bootstrap() {
  const app = await NestFactory.create(NestLandingModule);
  await app.listen(3002);
}
bootstrap();
