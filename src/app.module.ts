import { Module } from '@nestjs/common';

import { AppController } from './app.controller';

/**
 * Main application module.
 */
@Module({
  imports: [],
  controllers: [AppController],
})
export class AppModule {}
