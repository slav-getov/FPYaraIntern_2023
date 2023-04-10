import { Module } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { BcryptService } from './bcrypt.service';
import { ManagementController } from './management.controller';
import { AuthenticationService } from './authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'typeorm/Client';
import { JwtModule } from '@nestjs/jwt';
import jwtConfig from './config/jwt.config';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticationGuard } from './guards/authentication.guard';
import { AccessTokenGuard } from './guards/access-token.guard';
@Module({
  imports: [
    TypeOrmModule.forFeature([Client]),
    JwtModule.registerAsync(jwtConfig.asProvider()),
    ConfigModule.forFeature(jwtConfig),
  ],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    { provide: APP_GUARD, useClass: AuthenticationGuard },
    AccessTokenGuard,
    AuthenticationService,
  ],
  controllers: [ManagementController],
})
export class ManagementModule {}
