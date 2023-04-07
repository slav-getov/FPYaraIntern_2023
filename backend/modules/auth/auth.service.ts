import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientsService } from 'modules/clients/clients.service';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}
  getSignUp() {
    console.log('done');
    try {
    } catch (error) {
      throw new HttpException('Can not signup', HttpStatus.UNAUTHORIZED);
    }
  }
  async validateClient(username: string, password: string) {
    console.log('inside validate client');
    const demoUserFound =
      await this.clientsService.findClientByUsernameAndPassword(
        username,
        password,
      );
    if (demoUserFound) {
      console.log(demoUserFound);
    } else {
      console.log('No such user');
    }
  }
}
