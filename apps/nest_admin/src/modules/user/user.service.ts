import { Injectable } from '@nestjs/common';
import { ApiBuilderService } from '@app/api_builder';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
// import { exit } from 'process';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly apiBuilder: ApiBuilderService
  ) { }

  async create(data) {
    return await this.userRepository.save(data);
  }

  async checkLogin(email: string) {
    const fields = "id, name, email, password, phone";
    const user = await this.apiBuilder.getData("users a", fields, "email = ? AND is_deleted = 0", [email]);
    const result = user[0];
    return result;
  }
}

