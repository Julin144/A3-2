import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RotasModule } from './rotas.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MenupacienteComponent } from './menupaciente/menupaciente.component';
import { AgendarpacienteComponent } from './agendarpaciente/agendarpaciente.component';
import { VisualizarconsultapacienteComponent } from './visualizarconsultapaciente/visualizarconsultapaciente.component'
import { VisualizarreceitapacienteComponent } from './visualizarreceitapaciente/visualizarreceitapaciente.component';
import { MenumedicoComponent } from './menumedico/menumedico.component';
import { GerarreceitamedicoComponent } from './gerarreceitamedico/gerarreceitamedico.component';
import { VisualizarprontuariomedicoComponent } from './visualizarprontuariomedico/visualizarprontuariomedico.component';
import { GerarprontuariomedicoComponent } from './gerarprontuariomedico/gerarprontuariomedico.component';
import { MenumedicogeralComponent } from './menumedicogeral/menumedicogeral.component';
import { CadastromedicoComponent } from './cadastromedico/cadastromedico.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    MenupacienteComponent,
    AgendarpacienteComponent,
    VisualizarconsultapacienteComponent,
    VisualizarreceitapacienteComponent,
    MenumedicoComponent,
    GerarreceitamedicoComponent,
    VisualizarprontuariomedicoComponent,
    GerarprontuariomedicoComponent,
    MenumedicogeralComponent,
    CadastromedicoComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    RotasModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
