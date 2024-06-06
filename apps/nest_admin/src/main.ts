import { NestFactory } from '@nestjs/core';
import { NestAdminModule } from './nest_admin.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(NestAdminModule); // admin module
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      port: 3001,
    },
  });
  await app.startAllMicroservices();
  await app.listen(3001)
}
bootstrap();
