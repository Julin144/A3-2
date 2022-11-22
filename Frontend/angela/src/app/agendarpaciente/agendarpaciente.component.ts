import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { AgendarpacienteService } from './agendarpaciente.service';


@Component({
  selector: 'app-agendarpaciente',
  templateUrl: './agendarpaciente.component.html',
  styleUrls: ['./agendarpaciente.component.css']
})
export class AgendarpacienteComponent implements OnInit {

  constructor(public AgendarpacienteService: AgendarpacienteService) { }
  onAgenda(form: NgForm){
    if (form.invalid) {
      return;
    }
    this.AgendarpacienteService.getagenda(form.value.cpfPaciente, form.value.data)
  }


  ngOnInit(): void {
  }

}
