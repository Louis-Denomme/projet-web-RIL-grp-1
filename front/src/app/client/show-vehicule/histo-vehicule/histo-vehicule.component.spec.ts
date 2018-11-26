import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoVehiculeComponent } from './histo-vehicule.component';

describe('HistoVehiculeComponent', () => {
  let component: HistoVehiculeComponent;
  let fixture: ComponentFixture<HistoVehiculeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoVehiculeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
