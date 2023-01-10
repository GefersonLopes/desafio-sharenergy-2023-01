import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsNotEmpty()
  @IsString()
  //Swagger
  @ApiProperty()
  username: string;

  @IsNotEmpty()
  @IsString()
  //Swagger
  @ApiProperty()
  password: string;
}

export class TokenDto {
  //Swagger
  @ApiProperty()
  token: string;
}
