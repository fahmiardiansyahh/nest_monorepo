import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Controller('user')
export class UserController {
  // constructor(private readonly userService: UserService) { }
  constructor(
    private readonly userService: UserService,
  ) { }

  @MessagePattern({ cmd: 'register_user' })
  async registerUser(@Payload() message: User): Promise<User> {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(message.password, salt);
    const bodyData: any = {
      name: message.name,
      email: message.email,
      password: hashedPassword,
      phone: message.phone
    };
    return await this.userService.create(bodyData);
  }


  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }
}