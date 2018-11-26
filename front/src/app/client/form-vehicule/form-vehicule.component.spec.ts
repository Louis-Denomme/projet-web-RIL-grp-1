import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVehiculeComponent } from './form-vehicule.component';

describe('FormVehiculeComponent', () => {
  let component: FormVehiculeComponent;
  let fixture: ComponentFixture<FormVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
