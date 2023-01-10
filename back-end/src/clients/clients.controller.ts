import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseErrorDTO } from '../auth/responseSwagger/response';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { ResponseClientDTO } from './responseSwagger/response';

@Controller('clients')
@ApiTags('Clients')
@UseGuards(AuthGuard('jwt'))
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new client' })
  @ApiResponse({ status: 201, description: 'Created', type: ResponseClientDTO })
  @ApiResponse({
    status: 400,
    description: 'Data invalid',
    type: ResponseErrorDTO,
  })
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @Get()
  @ApiOperation({ summary: 'List all clients' })
  @ApiResponse({
    status: 200,
    description: 'Ok',
    type: ResponseClientDTO,
    isArray: true,
  })
  findAll() {
    return this.clientsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get client by id' })
  @ApiResponse({ status: 200, description: 'Ok', type: ResponseClientDTO })
  @ApiResponse({
    status: 400,
    description: 'Id invalid',
    type: ResponseErrorDTO,
  })
  findOne(@Param('id') id: string) {
    return this.clientsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update client' })
  @ApiResponse({ status: 200, description: 'Ok', type: ResponseClientDTO })
  @ApiResponse({
    status: 400,
    description: 'Data invalid',
    type: ResponseErrorDTO,
  })
  @ApiResponse({
    status: 400,
    description: 'Id invalid',
    type: ResponseErrorDTO,
  })
  update(@Param('id') id: string, @Body() updateClientDto: UpdateClientDto) {
    return this.clientsService.update(id, updateClientDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete client' })
  @ApiResponse({ status: 200, description: 'Ok' })
  @ApiResponse({
    status: 400,
    description: 'Id invalid',
    type: ResponseErrorDTO,
  })
  remove(@Param('id') id: string) {
    return this.clientsService.remove(id);
  }
}
