import { Assignment, Bike, Car, Document, Luggage, Task, User } from '@hems/models';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

class ConfigService {
  constructor(private env: { [k: string]: string | undefined }) {}

  private getValue(key: string, throwOnMissing: boolean): string {
    const value = this.env[key];
    if (!value && throwOnMissing) {
      throw new Error(`config error - missing env.${key}`);
    }

    return value;
  }

  public ensureValues(keys: string[]) {
    keys.forEach((k) => this.getValue(k, true));
    return this;
  }

  public getPort() {
    return this.getValue('PORT', true);
  }

  public isProduction() {
    const mode = this.getValue('MODE', false);
    return mode != 'DEV';
  }

  public getTypeOrmConfig(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      synchronize: true,
      name: 'default',

      host: this.getValue('POSTGRES_HOST', false) || 'localhost',
      port: parseInt(this.getValue('POSTGRES_PORT', false)) || 5432,
      username: this.getValue('POSTGRES_USER', false) || 'root',
      password: this.getValue('POSTGRES_PASSWORD', false) || 'root',
      database: this.getValue('POSTGRES_DATABASE', false) || 'hems',
      dropSchema: true,

      entities: [User, Luggage, Car, Task, Assignment, Document, Bike],
    };
  }
}

// commented out so the app uses defaults for DB connection instead
const configService = new ConfigService(process.env).ensureValues([
  //   'POSTGRES_HOST',
  //   'POSTGRES_PORT',
  //   'POSTGRES_USER',
  //   'POSTGRES_PASSWORD',
  //   'POSTGRES_DATABASE',
]);

export { configService };
