import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(request: Request, response: Response, next: NextFunction): void {
    const { method, originalUrl, body } = request;
    const { statusCode } = response;

    response.on('close', () => {
      if (Object.keys(body).length > 0) {
        Logger.verbose(`${method} ${originalUrl} : ${statusCode}`, body);
      } else {
        Logger.verbose(`${method} ${originalUrl} : ${statusCode}`);
      }
    });

    next();
  }
}
