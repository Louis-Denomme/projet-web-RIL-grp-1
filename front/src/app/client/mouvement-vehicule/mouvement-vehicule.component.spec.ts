import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MouvementVehiculeComponent } from './mouvement-vehicule.component';

describe('MouvementVehiculeComponent', () => {
  let component: MouvementVehiculeComponent;
  let fixture: ComponentFixture<MouvementVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MouvementVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MouvementVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
