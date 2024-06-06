import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtConfig } from 'libs/jwt/jwt.config';
import { JwtStrategy } from 'libs/jwt/jwt.strategy';
import { UserService } from '../user/user.service';
import { EntityManager } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Repository as UserRepository } from 'typeorm';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: JwtConfig.user_secret,
      signOptions: {
        expiresIn: JwtConfig.user_expired,
      },
    }),
    TypeOrmModule.forFeature([User]),
  ],
  providers: [AuthService, JwtStrategy, UserService, EntityManager],
  controllers: [AuthController]
})

export class AuthModule { }
