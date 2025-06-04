import { Controller, Get } from '@nestjs/common';
import { UserServiceService } from './user-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class UserServiceController {
  constructor(private readonly userServiceService: UserServiceService) {}

  @Get()
  getHello(): string {
    return this.userServiceService.getHello();
  }

  @Get()
  @MessagePattern({ cmd: 'get_users' })
  getUsers(): string {
    return '{id: 1, name: "John Doe"}';
  }
}
