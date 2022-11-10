import { IBase } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { CreateDateColumn, UpdateDateColumn } from 'typeorm';

// base.entity.ts
export abstract class Base implements IBase {
  @ApiModelProperty()
  @CreateDateColumn({ default: () => 'NOW()' })
  createdAt?: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}
