import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastromedicoComponent } from './cadastromedico.component';

describe('CadastromedicoComponent', () => {
  let component: CadastromedicoComponent;
  let fixture: ComponentFixture<CadastromedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastromedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastromedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
