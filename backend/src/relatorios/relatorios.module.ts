import { Module } from '@nestjs/common';
import { RelatoriosController } from './relatorios.controller';
import { RelatoriosService } from './relatorios.service';

@Module({
  controllers: [RelatoriosController],
  providers: [RelatoriosService]
})
export class RelatoriosModule {}
