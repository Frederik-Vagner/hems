import {
  createParamDecorator,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

export const RequiredQuery = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (data) {
      const queryParameter = request.query[data];

      if (queryParameter) {
        return queryParameter;
      }
      throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
    }
  }
);
