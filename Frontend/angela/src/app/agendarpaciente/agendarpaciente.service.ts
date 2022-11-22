import { Injectable } from '@angular/core';
import { Agendarpaciente } from './agendarpaciente.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AgendarpacienteService {
  constructor(private httpClient: HttpClient, private router: Router) {}
  getagenda(cpfPaciente: string, data: string) {
    const dadosAgenda = new FormData();
    dadosAgenda.append('cpfPaciente', cpfPaciente);
    dadosAgenda.append('data', data);
    console.log(dadosAgenda);
    this.httpClient
      .post<{ cpfPaciente: number; data: string }>(
        'http//localhost:9000/horarioagendado',
        dadosAgenda
      )
      .subscribe((resultado) => console.log(resultado));
  }
}
