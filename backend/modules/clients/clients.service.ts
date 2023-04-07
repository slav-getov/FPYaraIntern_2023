import { Injectable } from '@nestjs/common';
import { ClientDto } from 'dtos/client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Client } from 'typeorm/Client';
import { Repository } from 'typeorm';

@Injectable()
export class ClientsService {
  constructor(
    @InjectRepository(Client)
    private readonly clientRepository: Repository<Client>,
  ) {}
  getAllClients() {
    return null;
  }
  createClient(client: ClientDto) {
    const newClient = this.clientRepository.create(client);

    console.log(newClient);
    return this.clientRepository.save(newClient);
  }
  findClientByUsernameAndPassword(username: string, password: string) {
    return this.clientRepository.findOneBy({ username, password });
  }
}
