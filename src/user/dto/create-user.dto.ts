import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @Length(8) // Ensure password is at least 8 characters long
  password: string;

  // Optional: Add more fields as necessary
  @IsString()
  profilePicture?: string; // Optional field for profile picture URL
}
