import { Controller, Get, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private logger = new Logger('AppController');
  constructor(private readonly appService: AppService) {}

  @MessagePattern('signIn')
  async signIn(data: any) {
    this.logger.log('Adding ', data);
    return data;
  }
}
