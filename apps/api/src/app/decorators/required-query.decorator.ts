import {
  BadRequestException,
  createParamDecorator,
  ExecutionContext,
} from '@nestjs/common';

export const RequiredQuery = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    if (data) {
      const queryParameter = request.query[data];

      if (queryParameter) {
        return queryParameter;
      }
      throw new BadRequestException(
        `The ${data} query parameter is required`
      );
    }
  }
);
