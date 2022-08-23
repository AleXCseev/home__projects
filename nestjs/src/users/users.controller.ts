import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {

    constructor(private userServise: UsersService) {}

    @Post()
    create(@Body() userDto: CreateUserDto) {
        return this.userServise.createUser(userDto)
    }

    @Get()
    getAll() {
        return this.userServise.getAllUsers()
    }
}
