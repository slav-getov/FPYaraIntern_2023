import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from 'modules/clients/clients.module';
import { AuthModule } from 'modules/auth/auth.module';
import { Client } from 'typeorm/Client';
import { ManagementModule } from 'modules/management/management.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ClientsModule,
    ConfigModule.forRoot(),
    AuthModule,
    ManagementModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'demofp',
      username: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Client],
      password: 'Sdftyu23$&dfrthA',
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
