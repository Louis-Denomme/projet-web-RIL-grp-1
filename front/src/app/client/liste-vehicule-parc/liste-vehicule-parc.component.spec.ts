import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVehiculeParcComponent } from './liste-vehicule-parc.component';

describe('ListeVehiculeParcComponent', () => {
  let component: ListeVehiculeParcComponent;
  let fixture: ComponentFixture<ListeVehiculeParcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeVehiculeParcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeVehiculeParcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
