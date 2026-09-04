import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { AgendamentosModule } from './agendamentos/agendamentos.module';
import { RelatoriosModule } from './relatorios/relatorios.module';
import { RelatotiosService } from './relatotios/relatotios.service';

@Module({
  imports: [AuthModule, UsuariosModule, AgendamentosModule, RelatoriosModule],
  controllers: [AppController],
  providers: [AppService, RelatotiosService],
})
export class AppModule {}
