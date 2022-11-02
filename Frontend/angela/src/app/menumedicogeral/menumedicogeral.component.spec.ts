import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenumedicogeralComponent } from './menumedicogeral.component';

describe('MenumedicogeralComponent', () => {
  let component: MenumedicogeralComponent;
  let fixture: ComponentFixture<MenumedicogeralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenumedicogeralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenumedicogeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
