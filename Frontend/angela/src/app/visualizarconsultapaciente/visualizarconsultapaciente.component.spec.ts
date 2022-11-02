import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarconsultapacienteComponent } from './visualizarconsultapaciente.component';

describe('VisualizarconsultapacienteComponent', () => {
  let component: VisualizarconsultapacienteComponent;
  let fixture: ComponentFixture<VisualizarconsultapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarconsultapacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarconsultapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
