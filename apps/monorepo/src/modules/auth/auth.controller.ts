import { Controller, Post, Inject, Body, HttpCode } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { ClientProxy } from '@nestjs/microservices';

@ApiSecurity('apiKey')
@ApiSecurity('bearerAuth')
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly auth_client: ClientProxy
  ) { }


  @HttpCode(200)
  @Post(`/login`)
  async login(@Body() body) {
    const email = body.email;
    const password = body.password;
    return this.auth_client.send(
      { cmd: 'login' },
      { email, password },
    );
  }
}
