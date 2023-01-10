import { ApiProperty } from '@nestjs/swagger';

export class ResponseUserDTO {
  @ApiProperty()
  _id: string;
  @ApiProperty()
  username: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  age: number;
  @ApiProperty()
  _v: number;
}
