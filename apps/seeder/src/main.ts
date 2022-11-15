import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SeedModule } from './seed.module';
import { SeedService } from './seed.service';

async function bootstrap() {
  const appCtx = await NestFactory.createApplicationContext(
    SeedModule.register()
  );
  const logger = appCtx.get(Logger);
  const seeder = appCtx.get(SeedService);

  try {
    await seeder.seed();
    logger.debug('Seeding complete!');
    appCtx.close();
  } catch (error) {
    logger.error('Seeding failed');
    throw error;
  }
}

bootstrap();
