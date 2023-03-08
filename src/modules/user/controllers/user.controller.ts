import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserEntity } from '../models/user.entity';
import { UserService } from '../services/user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  create(@Body() user: UserEntity) {
    return this.userService.create(user);
  }

  @Get()
  findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.userService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() user: UserEntity) {
    return this.userService.update(id, user);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.userService.delete(id);
  }
}
