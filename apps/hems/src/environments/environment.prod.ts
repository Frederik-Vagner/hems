import { IEnvironment } from './environment.interface';

// production-specific environment
export const environment: IEnvironment = {
  production: true,
  envName: 'production',

  apiUrl: 'http://localhost:3333',
};
