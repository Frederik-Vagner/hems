/* eslint-disable @typescript-eslint/no-unused-vars */
import { LoginRequest, LoginResponse, SignupRequest } from '@hems/interfaces';
import {
  Body,
  Controller,
  HttpCode,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  @ApiOperation({
    summary: `Log in as an existing user`,
  })
  @ApiOkResponse({ type: LoginResponse })
  @HttpCode(200)
  async login(@Request() req, @Body() LoginRequest: LoginRequest) {
    // uses the passport library logic to obtain the user
    return this.authService.login(req.user);
  }

  @Post('signup')
  @ApiOperation({
    summary: `Register a new user`,
  })
  @ApiOkResponse({ type: LoginResponse })
  async signup(@Body() signupRequestDto: SignupRequest) {
    return this.authService.signup(signupRequestDto);
  }
}
