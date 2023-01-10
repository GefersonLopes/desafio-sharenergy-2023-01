import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MinLength,
  MaxLength,
  IsNumber,
  IsPositive,
  Min,
  IsEmail,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(280)
  //Swagger
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(8)
  @MaxLength(16)
  //Swagger
  @ApiProperty()
  password: string;

  @IsNotEmpty()
  @IsEmail()
  @MaxLength(100)
  //Swagger
  @ApiProperty()
  email: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  @Min(18)
  //Swagger
  @ApiProperty()
  age: number;
}
