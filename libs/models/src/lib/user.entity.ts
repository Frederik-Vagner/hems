import { IUser, Role } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from './base.entity';

@Entity('users')
export class User extends Base implements IUser {
  @ApiModelProperty({ example: '80a0d2ac-ec67-482e-9017-909b72a74be7' })
  @PrimaryGeneratedColumn('uuid')
  userId!: string;

  @ApiModelProperty({ example: 'user@example.com' })
  @Column({ length: 254, unique: true })
  email!: string;

  @ApiModelProperty()
  @Column({ length: 120 })
  password!: string;

  @ApiModelProperty({ example: Role.user })
  @Column({ type: 'enum', enum: Role, default: Role.admin })
  role!: Role;
}
