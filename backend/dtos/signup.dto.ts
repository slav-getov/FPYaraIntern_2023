import {
  IsString,
  IsNotEmpty,
  MinLength,
  IsEmail,
  IsStrongPassword,
} from 'class-validator';

export class SignUpDto {
  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  first_name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  last_name: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  @MinLength(10)
  phone: string;
}
