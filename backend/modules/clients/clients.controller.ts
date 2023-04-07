import { Controller, Get, Post, Body } from '@nestjs/common/decorators';
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
  @Post('create')
  createClient(@Body() client: ClientDto) {
    return this.clientService.createClient(client);
  }
}
