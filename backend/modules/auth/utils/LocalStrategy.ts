import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from '../auth.service';
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }
  async validate(username: string, password: string): Promise<any> {
    console.log('in local strategy');
    console.log(username, password);
    const client = this.authService.validateClient(username, password);
    if (!client) {
      throw new UnauthorizedException();
    }
    return client;
  }
}
