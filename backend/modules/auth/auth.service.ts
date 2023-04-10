import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { ClientDto } from 'dtos/client.dto';
import { ClientsService } from 'modules/clients/clients.service';
import { comparePasswords } from './utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly clientsService: ClientsService) {}
  //   getSignUp() {
  //     console.log('done');
  //     try {
  //     } catch (error) {
  //       throw new HttpException('Can not signup', HttpStatus.UNAUTHORIZED);
  //     }
  //   }
  async validateClient(username: string, password: string) {
    console.log('inside validate client');
    //there is a magic method kind of - related to using local strategy
    const demoUserFound = await this.clientsService.findClientByUsername(
      username,
    );
    console.log(demoUserFound);
    if (demoUserFound) {
      const matched = comparePasswords(password, demoUserFound.password);
      if (matched) {
        console.log('validated');
        return demoUserFound;
      } else {
        console.log('passwords do not match');
      }
    } else {
      console.log('pass validation failed');
      return null;
    }
  }
  async registerClient(client: ClientDto) {
    const creation = await this.clientsService.createClient(client);
    console.log(creation);
  }
}
