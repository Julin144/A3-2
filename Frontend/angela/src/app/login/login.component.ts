import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: any;

  constructor(public loginService: LoginService) { }
  onLogar(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.loginService.getlogin(form.value.cpfPaciente, form.value.senha)
  }

  ngOnInit(): void {}
}
