import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenupacienteComponent } from './menupaciente/menupaciente.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { AgendarpacienteComponent } from './agendarpaciente/agendarpaciente.component';
import { VisualizarconsultapacienteComponent } from './visualizarconsultapaciente/visualizarconsultapaciente.component';
import { VisualizarreceitapacienteComponent } from './visualizarreceitapaciente/visualizarreceitapaciente.component';
import { MenumedicoComponent } from './menumedico/menumedico.component';
import { GerarreceitamedicoComponent } from './gerarreceitamedico/gerarreceitamedico.component';
import { VisualizarprontuariomedicoComponent } from './visualizarprontuariomedico/visualizarprontuariomedico.component';
import { GerarprontuariomedicoComponent } from './gerarprontuariomedico/gerarprontuariomedico.component';
import { MenumedicogeralComponent } from './menumedicogeral/menumedicogeral.component';
import { CadastromedicoComponent } from './cadastromedico/cadastromedico.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menupaciente', component: MenupacienteComponent },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'agendamento', component: AgendarpacienteComponent },
  { path: 'verconsulta', component: VisualizarconsultapacienteComponent },
  { path: 'verreceita', component: VisualizarreceitapacienteComponent },
  { path: 'menumed', component: MenumedicoComponent },
  { path: 'gerarreceita', component: GerarreceitamedicoComponent },
  { path: 'verprontuario', component: VisualizarprontuariomedicoComponent },
  { path: 'criarprontuario', component: GerarprontuariomedicoComponent },
  { path: 'menumedgeral', component: MenumedicogeralComponent },
  { path: 'cadastromedico', component: CadastromedicoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class RotasModule {}
