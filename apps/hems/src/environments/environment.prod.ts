import { IEnvironment } from './environment.interface';

// production-specific environment
export const environment: IEnvironment = {
  production: true,
  envName: 'production',

  apiUrl: window['env'] ? window['env']['apiUrl'] : 'http://localhost:3333',
};
