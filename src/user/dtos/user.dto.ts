import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsEmail, IsBoolean } from 'class-validator';

export class CreateOrUpdateUserFromAdminDto {
  @ApiProperty({
    type: Number,
    required: false,
    nullable: true,
    example: 1,
  })
  @IsOptional()
  id?: number;

  @ApiProperty({
    type: String,
    required: true,
    example: 'John',
  })
  @IsString()
  name: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'Doe',
  })
  @IsString()
  lastName: string;

  @ApiProperty({
    type: String,
    required: true,
    example: 'john.doe@gmail.com',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    type: String,
    required: true,
    example: '********',
  })
  @IsString()
  password: string;

  @ApiProperty({
    type: Boolean,
    required: true,
    example: true,
  })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    type: String,
    required: false,
    nullable: true,
    example: 'https://image',
  })
  @IsOptional()
  avatarUrl?: string;

  @ApiProperty({
    type: Array,
    required: false,
    nullable: true,
  })
  @IsOptional()
  prefrences?: string[];
}
