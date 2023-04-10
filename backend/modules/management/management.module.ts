import { Module } from '@nestjs/common';
import { HashingService } from './hashing.service';
import { BcryptService } from './bcrypt.service';
import { ManagementController } from './management.controller';
import { AuthenticationService } from './authentication.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Client } from 'typeorm/Client';
@Module({
  imports: [TypeOrmModule.forFeature([Client])],
  providers: [
    {
      provide: HashingService,
      useClass: BcryptService,
    },
    AuthenticationService,
  ],
  controllers: [ManagementController],
})
export class ManagementModule {}
