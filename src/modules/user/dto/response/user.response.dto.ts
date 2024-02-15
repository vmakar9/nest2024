import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  id: string;

  name: string;

  age: number;

  email: string;
}
