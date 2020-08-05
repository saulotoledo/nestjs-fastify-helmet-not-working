import * as fastifyHelmet from 'fastify-helmet';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';

import { AppModule } from './app.module';

const adapter = new FastifyAdapter();

void (async (): Promise<void> => {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, adapter);
  await app.listen(3000);
  app.register(fastifyHelmet);
})();
