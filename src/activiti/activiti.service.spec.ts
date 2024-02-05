import { Test, TestingModule } from '@nestjs/testing';
import { ActivitiService } from './activiti.service';

describe('ActivitiService', () => {
  let service: ActivitiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActivitiService],
    }).compile();

    service = module.get<ActivitiService>(ActivitiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
