import { Test, TestingModule } from '@nestjs/testing';
import { AgendamentosController } from './agendamentos.controller';

describe('AgendamentosController', () => {
  let controller: AgendamentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AgendamentosController],
    }).compile();

    controller = module.get<AgendamentosController>(AgendamentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
