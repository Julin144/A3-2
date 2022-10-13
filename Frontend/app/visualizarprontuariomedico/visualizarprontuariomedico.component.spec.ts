import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarprontuariomedicoComponent } from './visualizarprontuariomedico.component';

describe('VisualizarprontuariomedicoComponent', () => {
  let component: VisualizarprontuariomedicoComponent;
  let fixture: ComponentFixture<VisualizarprontuariomedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarprontuariomedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarprontuariomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
