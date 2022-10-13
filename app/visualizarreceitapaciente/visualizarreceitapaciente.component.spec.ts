import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarreceitapacienteComponent } from './visualizarreceitapaciente.component';

describe('VisualizarreceitapacienteComponent', () => {
  let component: VisualizarreceitapacienteComponent;
  let fixture: ComponentFixture<VisualizarreceitapacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarreceitapacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarreceitapacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
