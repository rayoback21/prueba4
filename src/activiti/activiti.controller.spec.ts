import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiController } from './activiti.controller';
import { ActivitiService } from './activiti.service';

describe('ActivitiController', () => {
  let controller: ActivitiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActivitiController],
      providers: [ActivitiService],
    }).compile();

    controller = module.get<ActivitiController>(ActivitiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
