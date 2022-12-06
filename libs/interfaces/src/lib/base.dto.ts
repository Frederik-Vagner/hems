import { IBase, ICompletedAt } from '@hems/interfaces';
import { ApiModelProperty } from '@nestjs/swagger/dist/decorators/api-model-property.decorator';

export abstract class BaseResponse implements IBase {
  @ApiModelProperty()
  createdAt?: Date;

  @ApiModelProperty()
  updatedAt?: Date;
}

export abstract class CompletedAtResponse
  extends BaseResponse
  implements ICompletedAt
{
  @ApiModelProperty()
  completedAt?: Date;
}
