import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { User } from './interfaces/user';

@Injectable()
export class UserService {
  getUser(): string {
    return 'user';
  }

  signUp(body: CreateUserDto): User {
    console.log(body);

    // sign up logic
    const newUser: User = {
      id: 1,
      name: 'umin',
      email: 'umin0829@gmail.com',
    };

    return newUser;
  }
}
