import { ISignupRequest, IUser, Role } from '@hems/interfaces';
import { User } from '@hems/models';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  /**
   * Find a singular user by their email.
   * @param email email of the user.
   * @returns user or undefined.
   */
  async findOne(email: string): Promise<User | undefined> {
    return this.userRepo.findOneOrFail({ where: { email: email } });
  }

  /**
   * Create and persist a user entity.
   * @param signupRequestDto information for user creation.
   * @returns created user.
   */
  async create(signupRequestDto: ISignupRequest): Promise<IUser> {
    const { email, password } = signupRequestDto;
    const newUser = this.userRepo.create({
      email: email,
      password: password,
      role: Role.user,
    });
    return this.userRepo.save(newUser);
  }
}
