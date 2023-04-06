import { IsString, IsNotEmpty } from 'class-validator';
export class SignUpDto {
  @IsString()
  @IsNotEmpty()
  content: string;

  email: string;
}
