import { Body, Controller, Post, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './interfaces/user';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  getUser(): string {
    return this.userService.getUser();
  }

  @Post('signup')
  async signup(@Body() body: CreateUserDto): Promise<User> {
    const createdUser = await this.userService.signUp(body);

    return createdUser;
  }
}
