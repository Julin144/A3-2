import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumedicoComponent } from './menumedico.component';

describe('MenumedicoComponent', () => {
  let component: MenumedicoComponent;
  let fixture: ComponentFixture<MenumedicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumedicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
