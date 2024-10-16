import {
  ConflictException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { PrismaService } from "src/prisma.service";
import { BcryptService } from "src/bcrypt.service";
import { userNameGenerate } from "src/utils/userNamegenerator";

@Injectable()
export class UserService {
  constructor(
    private prisma: PrismaService,
    private bcryptService: BcryptService
  ) {}

  async create(createUserDto: CreateUserDto) {
    const isAlreadyExistUser = await this.prisma.user.findUnique({
      where: { email: createUserDto?.email },
    });

    if (isAlreadyExistUser) {
      throw new ConflictException("User already exist with this email");
    }

    const hashPassword = await this.bcryptService.hashPassword(
      createUserDto?.password
    );

    const userName = userNameGenerate(createUserDto?.fullName)
    const response = await this.prisma.user.create({
      data: {
        email: createUserDto?.email,
        password: hashPassword,
        fullName:createUserDto?.fullName,
        userName:userName
      },
    });

    return response;
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(id: number) {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
