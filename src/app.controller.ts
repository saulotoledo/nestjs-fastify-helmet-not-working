import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {

  @Get('/')
  public getFakeInfo(): Record<string, unknown> {
    return {
      status: 'OK',
      apiVersion: '0.1',
    };
  }
}
