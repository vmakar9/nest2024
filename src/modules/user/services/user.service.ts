import {Injectable, UnprocessableEntityException} from '@nestjs/common';
import { CreateUserDto } from '../models/dto/request/create-user.dto';
import { UpdateUserDto } from '../models/dto/request/update-user.dto';
import {UserRepository} from "../../repository/services/user.repository";

@Injectable()
export class UserService {

  constructor(private readonly userRepository: UserRepository) {
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    throw new UnprocessableEntityException('User not found');
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
