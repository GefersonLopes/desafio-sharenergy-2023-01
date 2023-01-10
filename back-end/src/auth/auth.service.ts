import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async token(user: User): Promise<any> {
    const payload = { sub: user.id, username: user.username };
    const token = this.jwtService.sign(payload);
    return { token };
  }

  async validateUser(username: string, password: string): Promise<User> {
    try {
      const user = await this.usersService.findUser(username);
      if (user && bcrypt.compareSync(password, user.password)) {
        return this.token(user);
      }
    } catch (err) {
      return null;
    }
  }
}
