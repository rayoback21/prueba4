import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ActivitiModule } from './activiti/activiti.module';

@Module({
  imports: [PrismaModule, ActivitiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
