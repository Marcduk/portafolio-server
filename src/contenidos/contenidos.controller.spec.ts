import { Test, TestingModule } from '@nestjs/testing';
import { ContenidosController } from './contenidos.controller';

describe('Contenidos Controller', () => {
  let controller: ContenidosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContenidosController],
    }).compile();

    controller = module.get<ContenidosController>(ContenidosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
