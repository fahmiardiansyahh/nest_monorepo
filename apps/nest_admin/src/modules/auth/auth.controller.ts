import { Controller } from '@nestjs/common';
import { ApiSecurity, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { MessagePattern, Payload } from '@nestjs/microservices';

@ApiSecurity('apiKey')
@ApiSecurity('bearerAuth')
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService
  ) { }


  @MessagePattern({ cmd: 'login' })
  async login(@Payload() req) {
    return this.authService.login(req)
  }
}
