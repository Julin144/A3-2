import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  hide: any;

  onLogar(form: NgForm){
    if (form.invalid) {
      return;
    }
  }

  ngOnInit(): void {}

  logar() {

  }
}
