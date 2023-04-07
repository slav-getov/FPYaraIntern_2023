import { Controller, Get } from '@nestjs/common/decorators';
import { ClientsService } from './clients.service';
import { HttpException, HttpStatus } from '@nestjs/common';
@Controller('clients')
export class ClientsController {
  constructor(private clientService: ClientsService) {}
  @Get()
  getAllClients() {
    const result = this.clientService.getAllClients();
    if (result) return result;
    else {
      throw new HttpException('No clients found', HttpStatus.NOT_FOUND);
    }
  }
}
