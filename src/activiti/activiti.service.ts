import { Injectable } from '@nestjs/common';
import { CreateActivitiDto } from './dto/create-activiti.dto';
import { UpdateActivitiDto } from './dto/update-activiti.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActivitiService {
  constructor(private prisma:PrismaService){}
  create(createActivitiDto: CreateActivitiDto) {

    return this.prisma.activiti.create({data: createActivitiDto});
  }

  findAll() {
  
    return this.prisma.activiti.findMany({ where:{exint: false} });
  }

  findExint() {
    return this.prisma.activiti.findMany({ where:{exint: false} });
  }
  findOne(id: number) {

    return this.prisma.activiti.findUnique({where:{ id} });
  }

  update(id: number, updateActivitiDto: UpdateActivitiDto) {

    return this.prisma.activiti.update({
      where: {id},
      data: updateActivitiDto
    })
  }

  remove(id: number) {

    return this.prisma.activiti.delete({ where: {id} });
  }
}
