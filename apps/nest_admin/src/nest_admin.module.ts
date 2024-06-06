import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestAdminController } from './nest_admin.controller';
import { NestAdminService } from './nest_admin.service';
import { UserModule } from './modules/user/user.module';
import { Config } from './data-source';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(Config),
    UserModule,
  ],
  controllers: [NestAdminController],
  providers: [NestAdminService],
})
export class NestAdminModule {
  constructor(private dataSource: DataSource) { }
}
