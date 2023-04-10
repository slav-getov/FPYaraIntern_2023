import { Session, UseGuards } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Body,
  Request,
} from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport/dist/auth.guard';
import { ClientDto } from 'dtos/client.dto';

import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async signUp(@Body() body: ClientDto) {
    console.log(body);
    console.log('in register in auth controller');
    const result = await this.authService.registerClient(body);
    console.log(result);
  }
  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Request() req) {}

  @Get('')
  async getAuthStatus(@Session() session: Record<string, any>) {
    //here we can access the session id and other things related to the session
    console.log(session);
    console.log(session.id);
  }
}
