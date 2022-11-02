import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendarpacienteComponent } from './agendarpaciente.component';

describe('AgendarpacienteComponent', () => {
  let component: AgendarpacienteComponent;
  let fixture: ComponentFixture<AgendarpacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendarpacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgendarpacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
