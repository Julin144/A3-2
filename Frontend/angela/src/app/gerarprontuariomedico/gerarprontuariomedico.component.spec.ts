import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarprontuariomedicoComponent } from './gerarprontuariomedico.component';

describe('GerarprontuariomedicoComponent', () => {
  let component: GerarprontuariomedicoComponent;
  let fixture: ComponentFixture<GerarprontuariomedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarprontuariomedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarprontuariomedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
