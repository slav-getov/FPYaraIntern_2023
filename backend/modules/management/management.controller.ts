import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { SignInDto } from 'dtos/signin.dto';
import { SignUpDto } from 'dtos/signup.dto';
import { AuthenticationService } from './authentication.service';
@Controller('authentication')
export class ManagementController {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Post('sign-up')
  signUp(@Body() signUpDto: SignUpDto) {
    return this.authenticationService.signUp(signUpDto);
  }

  @HttpCode(HttpStatus.OK)
  @Post('sign-in')
  signIn(@Body() signInDto: SignInDto) {
    return this.authenticationService.signIn(signInDto);
  }
}
