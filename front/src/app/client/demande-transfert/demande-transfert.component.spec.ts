import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeTransfertComponent } from './demande-transfert.component';

describe('DemandeTransfertComponent', () => {
  let component: DemandeTransfertComponent;
  let fixture: ComponentFixture<DemandeTransfertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeTransfertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeTransfertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
