import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

import { SignUpDto } from "./dtos/sign-up.dto";

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async signUp(body: SignUpDto) {
    // sign up logic
    const user = await this.prisma.user.create({
      data: body,
    });

    return user;
  }
}
