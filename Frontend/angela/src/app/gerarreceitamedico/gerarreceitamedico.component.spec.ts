import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerarreceitamedicoComponent } from './gerarreceitamedico.component';

describe('GerarreceitamedicoComponent', () => {
  let component: GerarreceitamedicoComponent;
  let fixture: ComponentFixture<GerarreceitamedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GerarreceitamedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerarreceitamedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
