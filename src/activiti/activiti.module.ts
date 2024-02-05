import { Module } from '@nestjs/common';
import { ActivitiService } from './activiti.service';
import { ActivitiController } from './activiti.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [ActivitiController],
  providers: [ActivitiService],
  imports: [PrismaModule],
})
export class ActivitiModule {}
