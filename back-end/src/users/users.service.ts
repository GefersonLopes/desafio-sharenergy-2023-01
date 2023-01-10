import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose/dist';
import { Model } from 'mongoose';

import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<User>) {}

  async findUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username: username }).exec();
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const { username } = createUserDto;
    createUserDto.password = bcrypt.hashSync(createUserDto.password, 10);

    const verifyUsername = await this.userModel
      .findOne({ username: username })
      .exec();

    if (verifyUsername) {
      throw new BadRequestException('Username already exists');
    }
    const newUser = new this.userModel(createUserDto);
    await newUser.save();

    newUser.password = undefined;
    return newUser;
  }

  async findAll(): Promise<CreateUserDto[]> {
    const userList = await this.userModel.find().exec();
    userList.filter((user) => (user.password = undefined));
    return userList;
  }

  async findOne(id: string): Promise<CreateUserDto> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new BadRequestException('User not found');
      }
      user.password = undefined;
      return user;
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<CreateUserDto> {
    try {
      const userUpdate = await this.userModel.findById(id).exec();
      if (!userUpdate) {
        throw new BadRequestException('User not found');
      }
      if (updateUserDto.password) {
        updateUserDto.password = bcrypt.hashSync(updateUserDto.password, 10);
      }
      await this.userModel.replaceOne({ _id: id }, updateUserDto).exec();
      return await this.userModel.findById(id).exec();
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const user = await this.userModel.findById(id).exec();
      if (!user) {
        throw new BadRequestException('User not found');
      }
      await this.userModel.findOneAndDelete({ _id: id }).exec();
    } catch (error) {
      throw new BadRequestException('User not found');
    }
  }
}
