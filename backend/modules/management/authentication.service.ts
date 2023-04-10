import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Client } from 'typeorm/Client';
import { HashingService } from './hashing.service';
import { SignUpDto } from 'dtos/signup.dto';
import { SignInDto } from 'dtos/signin.dto';
import { UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist';
import jwtConfig from './config/jwt.config';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
    private readonly hashingService: HashingService,
    private readonly jwtService: JwtService,
    @Inject(jwtConfig.KEY)
    private readonly jwtConfiguration: ConfigType<typeof jwtConfig>,
  ) {}

  async signUp(signUpDto: SignUpDto) {
    try {
      const password = await this.hashingService.hash(signUpDto.password);
      const newClient = this.clientRepository.create({
        ...signUpDto,
        password,
      });

      await this.clientRepository.save(newClient);
    } catch (error) {
      throw new ConflictException();
    }
  }
  async signIn(signInDto: SignInDto) {
    const client = await this.clientRepository.findOneBy({
      email: signInDto.email,
    });
    if (!client) {
      throw new UnauthorizedException('No such client exists!');
    }
    const isEqual = await this.hashingService.compare(
      signInDto.password,
      client.password,
    );

    if (!isEqual) {
      throw new UnauthorizedException('Password does not match');
    }
    const accessToken = await this.jwtService.signAsync(
      {
        sub: client.id,
        email: client.email,
        username: client.username,
      },
      {
        audience: this.jwtConfiguration.audience,
        issuer: this.jwtConfiguration.issuer,
        secret: this.jwtConfiguration.secret,
        expiresIn: this.jwtConfiguration.accessTokenTtl,
      },
    );
    console.log('in service');
    console.log(accessToken);
    return { accessToken };
  }
}
