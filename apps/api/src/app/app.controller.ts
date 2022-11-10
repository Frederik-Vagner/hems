import { Controller, Get } from '@nestjs/common';

import { IMessage } from '@hems/interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getData(): IMessage {
    return this.appService.getData();
  }
}
