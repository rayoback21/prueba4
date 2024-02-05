import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivitiService } from './activiti.service';
import { CreateActivitiDto } from './dto/create-activiti.dto';
import { UpdateActivitiDto } from './dto/update-activiti.dto';

@Controller('activitis')
export class ActivitiController {
  constructor(private readonly activitisService: ActivitiService) {}

  @Post()
  create(@Body() createActivitiDto: CreateActivitiDto) {
    return this.activitisService.create(createActivitiDto);
  }

  @Get('/exint')
  findExint() {
    return this.activitisService.findExint();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activitisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivitiDto: UpdateActivitiDto) {
    return this.activitisService.update(+id, updateActivitiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activitisService.remove(+id);
  }
}
