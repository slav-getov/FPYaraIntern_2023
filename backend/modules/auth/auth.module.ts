import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ClientsService } from 'modules/clients/clients.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'typeorm/Client';
import { PassportModule } from '@nestjs/passport/dist';
import { LocalStrategy } from './utils/LocalStrategy';
@Module({
  imports: [TypeOrmModule.forFeature([Client]), PassportModule],
  controllers: [AuthController],
  providers: [AuthService, ClientsService, LocalStrategy],
})
export class AuthModule {}
