import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCaracteristiqueVehiculeComponent } from './show-caracteristique-vehicule.component';

describe('ShowCaracteristiqueVehiculeComponent', () => {
  let component: ShowCaracteristiqueVehiculeComponent;
  let fixture: ComponentFixture<ShowCaracteristiqueVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCaracteristiqueVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCaracteristiqueVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
