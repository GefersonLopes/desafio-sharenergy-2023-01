import { Controller, Post, Body, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginAuthDto } from './dto/login-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseAuthDTO, ResponseErrorDTO } from './responseSwagger/response';

@Controller('users')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @ApiTags('Auth')
  @Post('/login')
  @ApiOperation({ summary: 'User account login' })
  @ApiResponse({
    status: 200,
    description: 'Token of login',
    type: ResponseAuthDTO,
  })
  @ApiResponse({
    status: 401,
    description: 'Email or password incorrect',
    type: ResponseErrorDTO,
  })
  login(@Body() loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto;
    return this.authService.validateUser(username, password);
  }
}
