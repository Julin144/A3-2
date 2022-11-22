import { Injectable } from '@angular/core';
import { Login } from './login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  getlogin(cpfPaciente: number, senha: string){const login: Login = { senha: senha, cpfPaciente: cpfPaciente, }
  this.httpClient.get<{
    senha: string,
    cpfPaciente: number
  }>('http://localhost:4000/login').subscribe(resultado => console.log(resultado))
}
}
