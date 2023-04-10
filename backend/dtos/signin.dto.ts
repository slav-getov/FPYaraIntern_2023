import { IsString, IsNotEmpty, MinLength } from 'class-validator';
export class SignInDto {
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  @MinLength(10)
  password: string;
}
