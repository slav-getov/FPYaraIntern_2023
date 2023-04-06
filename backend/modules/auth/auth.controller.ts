import { ParseIntPipe } from '@nestjs/common';
import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Res,
} from '@nestjs/common/decorators';
import { SignUpDto } from 'dtos/signup.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Get('signup/:id')
  getSignUp(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return this.authService.getSignUp();
  }
  @Post('signup')
  postSignUp(@Body() body: SignUpDto, @Res() res: any) {
    console.log(res.error);
  }
}
