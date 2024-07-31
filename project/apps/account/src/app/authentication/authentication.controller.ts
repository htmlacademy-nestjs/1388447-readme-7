import { Controller, Body, Post, Get, Param } from '@nestjs/common';

import {AuthenticationService} from "./authentication.service";
import {CreateUserDto} from "./data-transfer-object/create-user.dto";
import {LoginUserDto} from "./data-transfer-object/login-user.dto";

@Controller('auth')
export class AuthenticationController {
  constructor(private readonly authService: AuthenticationService) {}

  @Post('register')
  public async create(@Body() dto: CreateUserDto) {
    return await this.authService.register(dto);
  }

  @Post('login')
  public async login(@Body() dto: LoginUserDto) {
    const verifiedUser = await this.authService.verifyUser(dto);
    return verifiedUser.toPOJO();
  }

  @Get(':id')
  public async show(@Param('id') id: string) {
    const existUser = await this.authService.getUser(id);
    return existUser.toPOJO();
  }
}
