import { PartialType } from '@nestjs/swagger';
import { CreateActivitiDto } from './create-activiti.dto';

export class UpdateActivitiDto extends PartialType(CreateActivitiDto) {}
