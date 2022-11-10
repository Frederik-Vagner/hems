import { Role } from '@hems/interfaces';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { ROLES_KEY } from './roles.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>(ROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    // skip if there is no required roles
    if (!requiredRoles) {
      return true;
    }
    const { headers } = context.switchToHttp().getRequest();

    // validate that the request contains the jwt access token
    if (!headers || !headers.authorization) {
      return false;
    }

    // extract information from the access token
    const jwt = <{ email?: string; id?: string; iat?: number; exp?: number }>(
      this.jwtService.decode(headers.authorization.replace('Bearer ', ''))
    );

    // validate that the token contains an email
    if (!jwt || !jwt.email) {
      return false;
    }

    // fetch a user based on the email and check their role
    const user = await this.usersService.findOne(jwt.email);
    if (!user) {
      return false;
    }
    return requiredRoles.some((role) => user.role?.includes(role));
  }
}
