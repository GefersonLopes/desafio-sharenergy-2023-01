import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsString,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class Address {
  @IsString()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  street: string;

  @IsNumber()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  number: number;
}

export class CreateClientDto {
  @IsString()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  email: string;

  @IsNumber()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  tel: number;

  @Type(() => Address)
  @IsNotEmpty()
  @ValidateNested({ each: true })
  //Swagger
  @ApiProperty()
  address: Address;

  @IsString()
  @IsNotEmpty()
  //Swagger
  @ApiProperty()
  cpf: string;
}
