/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IJwtInfo,
  ILoginResponse,
  ISignupRequest,
  ISignupResponse,
  IUser,
  LoginRequest,
} from '@hems/interfaces';
import { User } from '@hems/models';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private readonly jwtService: JwtService
  ) {}

  /**
   * Verify that the the login attempt uses valid user credentials.
   * @param loginRequestDto user credentials.
   * @returns validated user information or null.
   */
  async validateUser(loginRequestDto: LoginRequest): Promise<any> {
    const { email, password } = loginRequestDto;
    let user: User;
    try {
      user = await this.usersService.findOne(email);
    } catch (exception) {
      // ignore the exception
    }
    if (user && (await this.compareHashes(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  /**
   * Get a JWT access token for the given user \
   * This method is called internally by the authentication library.
   * @param user user for which the token gets generated.
   * @returns generated JWT.
   */
  async login(user: IUser): Promise<ILoginResponse> {
    const payload: IJwtInfo = {
      email: user.email,
      userId: user.userId,
      role: user.role,
    };
    return {
      accessToken: this.jwtService.sign(payload),
      role: user.role,
    };
  }

  /**
   * Register a new user and hash their password.
   * @param signupRequestDto signup information.
   * @returns access token for the registered user.
   */
  async signup(signupRequestDto: ISignupRequest): Promise<ISignupResponse> {
    const { email, password } = signupRequestDto;
    let foundUser: User;
    try {
      foundUser = await this.usersService.findOne(email);
    } catch (exception) {
      // ignore the exception
    }
    if (foundUser) {
      throw new BadRequestException(
        `This email is already taken. Try adding some random digits to it 👍`
      );
    }
    const hashedPassword = await this.encodePassword(password);
    const user = await this.usersService.create({
      email: email,
      password: hashedPassword,
    });
    return await this.login(user);
  }

  /**
   * Hashes and salts the plaintext password using bcrypt.
   * @param password plaitext password to hash.
   * @returns encoded password.
   */
  async encodePassword(password: string): Promise<string> {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  /**
   * Compares the plainttest password and a hash to verify that they match.
   * @param password plaintext password.
   * @param hash password hashed with bcrypt.
   * @returns whether the strings match.
   */
  async compareHashes(password, hash): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
