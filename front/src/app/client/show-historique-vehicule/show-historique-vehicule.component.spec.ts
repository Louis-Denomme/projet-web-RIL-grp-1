import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistoriqueVehiculeComponent } from './show-historique-vehicule.component';

describe('ShowHistoriqueVehiculeComponent', () => {
  let component: ShowHistoriqueVehiculeComponent;
  let fixture: ComponentFixture<ShowHistoriqueVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowHistoriqueVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowHistoriqueVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
