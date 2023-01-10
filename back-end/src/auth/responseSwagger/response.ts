import { ApiProperty } from '@nestjs/swagger';
import { TokenDto } from '../dto/login-auth.dto';

export class ResponseAuthDTO extends TokenDto {}
export class ResponseErrorDTO {
  @ApiProperty()
  statusCode: number;
  @ApiProperty()
  message: string[];
  @ApiProperty()
  error: string;
}
