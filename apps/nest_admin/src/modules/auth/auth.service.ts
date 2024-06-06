import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from '../user/entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) { }

  async login(dataForm: any) {
    let email: any = dataForm.email;
    let password = dataForm.password;
    // let checkUser = await this.apiBuilder.getData("users", "email", "email = ?", [email]);
    // console.log(checkUser)
    let user = await this.userRepository.findOneBy({ email })
    // console.log(typeof user)
    if (user != null) {
      const payload = {
        fullname: user.name,
        sub: user.id,
        email: user.email
      };

      return {
        statusCode: 200,
        access_token: this.jwtService.sign(payload),
        // redirect_to: redirect_to
      };
    }

    throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

  }
}
