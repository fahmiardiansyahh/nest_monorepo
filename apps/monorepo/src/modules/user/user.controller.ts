import { Controller, Get, Post, Body, Patch, Param, Delete, Inject, UseGuards } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class UserController {
  constructor(
    @Inject('USER_MICROSERVICE') private readonly user_client: ClientProxy
  ) { }

  @Post('register_user')
  registerUser(@Body() userData) {
    const name = userData.name;
    const email = userData.email;
    const password = userData.password;
    const phone = userData.phone;
    return this.user_client.send(
      { cmd: 'register_user' },
      { name, email, password, phone },
    );
  }
}