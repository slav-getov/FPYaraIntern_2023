import { Injectable, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthService {
  getSignUp() {
    //console.log('done');
    try {
    } catch (error) {
      throw new HttpException('Can not signup', HttpStatus.UNAUTHORIZED);
    }
  }
}
