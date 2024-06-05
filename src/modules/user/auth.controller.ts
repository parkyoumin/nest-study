import { Body, Controller, Post } from "@nestjs/common";

import { AuthService } from "./auth.service";
import { SignUpDto } from "./dtos/sign-up.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("signup")
  async signup(
    @Body() body: SignUpDto,
  ): Promise<{ id: number; email: string; name: string | null }> {
    const createdUser = await this.authService.signUp(body);

    return createdUser;
  }
}
