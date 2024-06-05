import { IsNotEmpty, IsOptional, IsString } from "class-validator";

export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  readonly email!: string;

  @IsString()
  @IsOptional()
  readonly name?: string;
}
