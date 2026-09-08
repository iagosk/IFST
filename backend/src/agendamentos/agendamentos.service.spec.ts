import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentosService } from './agendamentos.service';

describe('AgendamentosService', () => {
  let service: AgendamentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgendamentosService],
    }).compile();

    service = module.get<AgendamentosService>(AgendamentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
