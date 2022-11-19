import { IBase, ICompletedAt } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';
import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

// base.entity.ts
export abstract class Base implements IBase {
  @ApiModelProperty()
  @CreateDateColumn({ default: () => 'NOW()' })
  createdAt?: Date;

  @ApiModelProperty()
  @UpdateDateColumn()
  updatedAt?: Date;
}

export abstract class CompletedAt implements ICompletedAt {
  @ApiModelProperty()
  @Column()
  completedAt?: Date;
}
