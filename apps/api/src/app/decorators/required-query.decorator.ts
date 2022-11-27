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
        "There is a missing query parameter"
      );
    }
  }
);
