import { Injectable } from '@nestjs/common';
import { ClientDto } from 'dtos/client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'typeorm/Client';
import { Repository } from 'typeorm';
import { hashPassword } from 'modules/auth/utils/bcrypt';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  findAllClients() {
    return this.clientRepository.find();
  }
  createClient(client: ClientDto) {
    const password = hashPassword(client.password);
    console.log(password);
    const newClient = this.clientRepository.create({ ...client, password });

    console.log(newClient);
    return this.clientRepository.save(newClient);
  }
  findClientByUsername(username: string) {
    return this.clientRepository.findOneBy({ username });
  }
}
