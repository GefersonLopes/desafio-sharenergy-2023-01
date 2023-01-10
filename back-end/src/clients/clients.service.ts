import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';
import { CreateClientDto } from './dto/create-client.dto';
import { UpdateClientDto } from './dto/update-client.dto';
import { Client } from './entities/client.entity';

@Injectable()
export class ClientsService {
  constructor(@InjectModel('Client') private clientModel: Model<Client>) {}

  async create(createClientDto: CreateClientDto) {
    const newClient = new this.clientModel(createClientDto);
    return newClient.save();
  }

  async findAll(): Promise<Client[]> {
    return this.clientModel.find().exec();
  }

  async findOne(id: string): Promise<Client> {
    try {
      const client = await this.clientModel.findById(id).exec();
      if (!client) {
        throw new BadRequestException('User not found');
      }
    } catch (error) {
      throw new BadRequestException('User not found');
    }
    return await this.clientModel.findById(id).exec();
  }

  async update(id: string, updateClientDto: UpdateClientDto): Promise<Client> {
    try {
      const client = await this.clientModel.findById(id).exec();
      if (!client) {
        throw new BadRequestException('User not found');
      }
    } catch (error) {
      throw new BadRequestException('User not found');
    }
    await this.clientModel.findByIdAndUpdate(id, updateClientDto).exec();
    return this.clientModel.findById(id).exec();
  }

  async remove(id: string): Promise<void> {
    try {
      const client = await this.clientModel.findById(id).exec();
      if (!client) {
        throw new BadRequestException('User not found');
      }
    } catch (error) {
      throw new BadRequestException('User not found');
    }
    await this.clientModel.findByIdAndRemove({ _id: id }).exec();
  }
}
