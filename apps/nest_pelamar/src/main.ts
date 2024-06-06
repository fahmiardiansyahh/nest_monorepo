import { NestFactory } from '@nestjs/core';
import { NestPelamarModule } from './nest_pelamar.module';

async function bootstrap() {
  const app = await NestFactory.create(NestPelamarModule);
  await app.listen(3003);
}
bootstrap();
