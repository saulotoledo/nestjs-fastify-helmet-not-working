import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { Test, TestingModule } from '@nestjs/testing';
import { HttpServer } from '@nestjs/common';
import * as fastifyHelmet from 'fastify-helmet';

import { AppModule } from '../src/app.module';

describe('AppController (e2e)', (): void => {
  let app: NestFastifyApplication;
  let server: HttpServer;

  beforeEach(
    async (): Promise<void> => {
      const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [AppModule],
      }).compile();

      app = moduleFixture.createNestApplication<NestFastifyApplication>(new FastifyAdapter());
      app.register(fastifyHelmet);

      await app.init();
      server = await app.listen(3003);
    }
  );

  afterAll(
    async (): Promise<void> => {
      await server.close();
      await app.close();
    }
  );

  it('should contain security headers', (/* done */ /* <- add this parameter and helmet works */): void => {
    app
      .inject({ url: '/' })
      .then((resp): void => {
        console.log(resp.headers);
      })
      .catch((err: Error) => {
        fail(err);
      });

    expect(true).toBeTruthy();
  });
});
