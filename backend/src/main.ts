import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      secret: 'somedeepsecret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 80000,
      },
    }),
  );
  await app.listen(4000);
}
bootstrap();
