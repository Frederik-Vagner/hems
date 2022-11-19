import { Role } from './role.enum';

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  accessToken: string;
  role: Role;
}

export interface ISignupRequest {
  email: string;
  password: string;
}

export interface ISignupResponse {
  accessToken: string;
  role: Role;
}

export interface IJwtInfo {
  userId: string;
  role: Role;
  email: string;
}

export interface IAuthUser {
  accessToken: string;
  roles: string[];
}
