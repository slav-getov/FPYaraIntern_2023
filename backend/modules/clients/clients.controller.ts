import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { HttpException, HttpStatus } from '@nestjs/common';
import { ClientDto } from 'dtos/client.dto';
@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}
  @Get('all')
  getAllClients() {
    const result = this.clientService.findAllClients();
    if (result) return result;
    else {
      throw new HttpException('No clients found', HttpStatus.NOT_FOUND);
    }
  }
  @Get(':username')
  async getClientByUserName(@Param('username') username: string) {
    const result = await this.clientService.findClientByUsername(username);

    if (result) return result;
    else {
      throw new HttpException(
        `No such client with username ${username} found`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Post('create')
  createClient(@Body() client: ClientDto) {
    const creation = this.clientService.createClient(client);
    console.log(creation);
  }
}
